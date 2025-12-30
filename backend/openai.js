import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function moderateContent({ content }) {
  const response = await openai.moderations.create({
    model: "omni-moderation-latest",
    input: content
  });

  const result = response.results[0];

  if (result.flagged) {
    return {
      decision: "BLOCK",
      reason: "Content violates OpenAI policy",
      categories: result.categories
    };
  }

  return {
    decision: "ALLOW",
    reason: "Content compliant"
  };
}
