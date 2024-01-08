import OpenAI from "openai";

const apiKey = process.env.OPENAI_KEY;

export const openai = new OpenAI({
  apiKey: apiKey,
});
