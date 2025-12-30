import fs from "fs";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function analyzeFrame(imagePath) {
  const imageBase64 = fs.readFileSync(imagePath).toString("base64");

  const res = await client.responses.create({
    model: "gpt-4.1",
    input: [{
      role: "user",
      content: [
        { type: "input_text", text: "Detect nudity, sexual content, violence, illegal acts." },
        {
          type: "input_image",
          image_url: `data:image/jpeg;base64,${imageBase64}`
        }
      ]
    }]
  });

  const text = res.output_text || "";

  if (/nudity|sexual|violence|illegal/i.test(text)) return "BLOCK";
  return "ALLOW";
}
