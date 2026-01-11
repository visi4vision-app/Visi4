import OpenAI from "openai";
import axios from "axios";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function analyzeImage(imageUrl) {
  const res = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [{
      role: "user",
      content: [
        { type: "input_text", text: "Analyse cette image et dis si elle contient violence, nudité ou haine." },
        { type: "input_image", image_url: imageUrl }
      ]
    }]
  });

  const text = res.output_text || "";
  if (/violence|nudité|haine/i.test(text)) return "HIGH";
  if (/risque|suggestif/i.test(text)) return "MEDIUM";
  return "LOW";
}
