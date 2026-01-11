import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function analyzeFrame(imagePath) {
  const b64 = fs.readFileSync(imagePath).toString("base64");
  const res = await openai.responses.create({
    model: "gpt-4.1",
    input: [{
      role: "user",
      content: [
        { type: "input_text", text: "Detect nudity, sexual content, violence, illegal acts." },
        { type: "input_image", image_url: `data:image/jpeg;base64,${b64}` }
      ]
    }]
  });
  const out = res.output_text || "";
  if (/nudity|sexual|violence|illegal/i.test(out)) return { allowed:false, reason: out };
  return { allowed:true };
}
