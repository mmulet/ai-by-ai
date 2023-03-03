export interface SubstringTree {
  /**
   * sub_trees
   */
  s?: {
    [key: string]: SubstringTree;
  };
  /**
   * responses:
   * Number is an index into the responses array
   */
  r?: number[];
  /**
   * responses with regex
   */
  x?: number[];
}
