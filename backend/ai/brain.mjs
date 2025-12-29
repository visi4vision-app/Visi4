import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function brain(task, payload) {
  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: `Tu es le cerveau global de Visi4. Tâche: ${task}` },
      { role: "user", content: JSON.stringify(payload) }
    ]
  });
  return res.choices[0].message.content;
}
