import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const prompt = async (input: string): Promise<string> => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an assistent that generates programming code. You always return just the ode, without any comments. Don't attach any notes or comments that are outside of the code. Return pure code without human readable text.",
      },
      {
        role: "user",
        content: input,
      },
    ],
  });

  return response.choices[0].message.content as string;
};
