import { prompt } from "@codegen/llm/openai";

export const codegen = async (input: string): Promise<string> => {
  return await prompt(input);
};
