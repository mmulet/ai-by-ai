import { match_words_to_tree } from "./match_words_to_tree";
import { SubstringTree } from "./SubstringTree";
export class Responses {
  tree: SubstringTree | null = null;
  /**
   * @TODO maybe make this weak to avoid memory pressure
   */
  parts = new Map<number, [pattern: string, responses: string[]]>();
  constructor() {
    fetch("/static/substring_tree_shrunk_6.json").then(async (response) => {
      const tree = await response.json();
      this.tree = tree;
      console.log("tree!");
    });
  }

  respond = async (input: string) => {
    if (this.tree == null) {
      return "Loading...";
    }
    return match_words_to_tree(input, this.tree, this.parts);
  };
}
