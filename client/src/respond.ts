import { mother_prompts } from "./mother_keywords";
import { response_patterns } from "./response_patterns";

export const respond = (input: string) => {
  for (const { pattern, response } of response_patterns) {
    const match = input.match(pattern);
    if (!match) {
      continue;
    }
    const responseIndex = Math.floor(Math.random() * response.length);
    const out = response[responseIndex];
    return out.replace(
      /\$1/g,
      (match[1] ?? input)
        .replace(/i am/ig, "you are")
        .replace(/i'm/ig, "you are")
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

        .replace(/you are/ig, "I am")
        .replace(/you're/ig, "I am")
        .replace(/(\s|^)i\s/ig, "you")
        .replace(/(\s|^)me\s/ig, "you")
        .replace(/(\s|^)my\s/ig, "your")
        .replace(/(\s|^)mine\s/ig, "yours")
        .replace(/(\s|^)am\s/ig, "are")
        .replace(/(\s|^)myself\s/ig, "yourself")
        .replace(/(\s|^)i've\s/ig, "you have")
        .replace(/(\s|^)i'd\s/ig, "you would")
        .replace(/(\s|^)i'll\s/ig, "you will")
        .replace(/(\s|^)you'll/ig, "I will")
        .replace(/(\s|^)you've/ig, "I have")
        .replace(/(\s|^)you'd/ig, "I would")
        .replace(/(\s|^)yourself/ig, "myself")
        .replace(/(\s|^)your/ig, "my")
    );
  }

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

  const segway = [
    "Let's talk about something else.",
    "Let's change the subject",
    "How about this?:",
    "Instead of that, let's talk about:",
    "Let's focus on something else.",
  ];
  return `${segway[Math.floor(Math.random() * segway.length)]}\n ${
    mother_prompts[Math.floor(Math.random() * mother_prompts.length)]
  }`;
};
