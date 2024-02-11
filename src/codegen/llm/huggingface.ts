const model = "codellama/CodeLlama-7b-hf";

export const prompt = async (input: string): Promise<string> => {
  const { AutoTokenizer, AutoModelForCausalLM } = await import(
    "@xenova/transformers"
  );

  const tokenizer = AutoTokenizer.from_pretrained(model);
  const modelInstance = await AutoModelForCausalLM.from_pretrained(model);

  const response = await modelInstance(input, {
    max_length: 50,
    num_return_sequences: 1,
  });

  return response.data[0].generated_text;
};
