import { mother_prompts } from "./mother_keywords";
import { SubstringTree } from "./SubstringTree";
import { SubStringResponseAccumulator } from "./SubStringResponseAccumulator";
const part_size = 18886;

export const match_words_to_tree = async (
  input: string,
  tree: SubstringTree,
  parts: Map<number, [pattern: string, responses: string[]]>
) => {
  const words = input.toLowerCase().split(" ");
  for (let word_index = 0; word_index < words.length; word_index++) {
    const accumulator: SubStringResponseAccumulator = new Map();
    _match_word_to_tree(accumulator, words, word_index, tree, 0);
    if (accumulator.size == 0) {
      continue;
    }
    //Sort descending by level
    const entries = Array.from(accumulator.entries()).sort(
      (a, b) => b[0] - a[0]
    );
    for (const [_, responses] of entries) {
      //Put X first to prioritize regex
      const all_responses = [...responses.x, ...responses.r];
      for (const responseIndex of all_responses) {
        const partIndex = Math.floor(responseIndex / part_size);
        let part = parts.get(partIndex);
        if (part == undefined) {
          const downloaded_part = await fetch(
            `/static/parts/${partIndex}.json`
          ).then((response) => response.json());
          parts.set(partIndex, downloaded_part);
          part = downloaded_part;
        }
        const insidePart_responseIndex = responseIndex - partIndex * part_size;
        const [pattern, the_response_strings] = part![insidePart_responseIndex];
        const regex_pattern = new RegExp(pattern, "i");
        const match = regex_pattern.exec(input);
        if (match == null) {
          continue;
        }
        const out_string =
          the_response_strings[
            Math.floor(Math.random() * the_response_strings.length)
          ];
        if (match.length <= 1) {
          return out_string;
        }
        return out_string.replace(/\$(\d+)/g, (_, index) => {
          const capture = match[parseInt(index)];
          if (capture == undefined) {
            return "";
          }
          return capture
            .replace(/i am/gi, "you are")
            .replace(/i'm/gi, "you are")
            .replace(/me\s/i, "you")
            .replace(/my/gi, "your")
            .replace(/me/gi, "you")
            .replace(/you/gi, "me")
            .replace(/your/gi, "my")
            .replace(/mine/gi, "yours")
            .replace(/yours/gi, "mine")
            .replace(/our/gi, "your")
            .replace(/ours/gi, "yours")
            .replace(/we/gi, "you")
            .replace(/dunno/gi, "do not know")
            .replace(/yes/gi, "")
            .replace(/no\,/gi, "")
            .replace(/yes\,/gi, "")
            .replace(/ya/gi, "i")
            .replace(/aint/gi, "am not")
            .replace(/wanna/gi, "want to")
            .replace(/gimme/gi, "give me")
            .replace(/gotta/gi, "have to")
            .replace(/gonna/gi, "going to")
            .replace(/never/gi, "not ever")
            .replace(/doesn\'t/gi, "does not")
            .replace(/don\'t/gi, "do not")
            .replace(/aren\'t/gi, "are not")
            .replace(/isn\'t/gi, "is not")
            .replace(/won\'t/gi, "will not")
            .replace(/can\'t/gi, "cannot")
            .replace(/haven\'t/gi, "have not")
            .replace(/i\'m/gi, "you are")
            .replace(/ourselves/gi, "yourselves")
            .replace(/myself/gi, "yourself")
            .replace(/yourself/gi, "myself")
            .replace(/you\'re/gi, "i am")
            .replace(/you\'ve/gi, "i have")
            .replace(/i\'ve/gi, "you have")
            .replace(/i\'ll/gi, "you will")
            .replace(/you\'ll/gi, "i shall")
            .replace(/i\'d/gi, "you would")
            .replace(/you\'d/gi, "i would")
            .replace(/here/gi, "there")
            .replace(/please/gi, "")
            .replace(/eh\,/gi, "")
            .replace(/eh/gi, "")
            .replace(/oh\,/gi, "")
            .replace(/oh/gi, "")
            .replace(/shouldn\'t/gi, "should not")
            .replace(/wouldn\'t/gi, "would not")
            .replace(/won\'t/gi, "will not")
            .replace(/hasn\'t/gi, "has not")

            .replace(/you are/gi, "I am")
            .replace(/you're/gi, "I am")
            .replace(/(\s|^)i\s/gi, "$1you ")
            .replace(/(\s|^)me\s/gi, "$1you")
            .replace(/(\s|^)my\s/gi, "$1your")
            .replace(/(\s|^)mine\s/gi, "$1yours")
            .replace(/(\s|^)am\s/gi, "$1are")
            .replace(/(\s|^)myself\s/gi, "$1yourself")
            .replace(/(\s|^)i've\s/gi, "$1you have")
            .replace(/(\s|^)i'd\s/gi, "$1you would")
            .replace(/(\s|^)i'll\s/gi, "$1you will")
            .replace(/(\s|^)you'll/gi, "$1I will")
            .replace(/(\s|^)you've/gi, "$1I have")
            .replace(/(\s|^)you'd/gi, "$1I would")
            .replace(/(\s|^)yourself/gi, "$1myself")
            .replace(/(\s|^)your/gi, "$1my");
        });
      }
    }
  }
  /**
   * No responses, so we need to segway into something else.
   */
  if (Math.random() < 0.5) {
    const no_response_responses = [
      "Can you tell me more?",
      "I'm listening.",
      "Please continue.",
    ];
    return no_response_responses[
      Math.floor(Math.random() * no_response_responses.length)
    ];
  }

  const segue = [
    "Let's talk about something else.",
    "Let's change the subject",
    "How about this?:",
    "Instead of that, let's talk about:",
    "Let's focus on something else.",
  ];
  return `${segue[Math.floor(Math.random() * segue.length)]}\n ${
    mother_prompts[Math.floor(Math.random() * mother_prompts.length)]
  }`;
};

const _match_word_to_tree = (
  accumulator: SubStringResponseAccumulator,
  words: string[],
  word_index: number,
  tree: SubstringTree,
  level: number
) => {
  if (tree.r !== undefined || tree.x !== undefined) {
    const this_levels_responses = accumulator.get(level) ?? { r: [], x: [] };
    if (tree.r !== undefined) {
      this_levels_responses.r.push(...tree.r);
    }
    if (tree.x !== undefined) {
      this_levels_responses.x.push(...tree.x);
    }
    accumulator.set(level, this_levels_responses);
  }
  if (tree.s == undefined) {
    // A leaf node, return
    return;
  }
  const word = words[word_index];
  if (word == undefined) {
    return;
  }
  const sub_tree = tree.s[word];
  if (sub_tree == undefined) {
    return;
  }
  _match_word_to_tree(accumulator, words, word_index + 1, sub_tree, level + 1);
};
