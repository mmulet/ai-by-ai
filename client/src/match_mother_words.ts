import { mother_keywords } from "./mother_keywords";

export const match_mother_words = (input: string): string | null => {
  const words = input.toLowerCase().split(/\s+/);
  for (const word of words) {
    const response = mother_keywords[word];
    if (response == undefined) {
      continue;
    }
    return response;
  }
  return null;
};
