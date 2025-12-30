import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function aiReply(lang, prompt) {
  const response = await client.responses.create({
    model: "gpt-4.1",
    input: [
      {
        role: "system",
        content: "You are a helpful, creative, safe AI assistant for a social platform."
      },
      {
        role: "user",
        content: prompt
      }
    ]
  });

  return response.output_text;
}
