import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function moderateText({ text, country }) {
  const res = await openai.moderations.create({
    model: "omni-moderation-latest",
    input: text
  });

  const flagged = res.results[0].flagged;

  if (flagged) {
    return {
      allowed: false,
      reason: "Contenu contraire aux règles de respect et de modération"
    };
  }

  return { allowed: true };
}
