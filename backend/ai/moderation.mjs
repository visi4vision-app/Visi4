import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function moderate(text) {
  const r = await openai.moderations.create({
    model: "omni-moderation-latest",
    input: text
  });
  return r.results[0];
}
