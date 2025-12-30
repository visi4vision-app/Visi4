const fs = require("fs");
const { execSync } = require("child_process");

const memory = JSON.parse(fs.readFileSync("memory.json", "utf8"));

const messages = [
  {
    role: "system",
    content:
      "Tu es l'intelligence artificielle de l'application Visi4. Tu as accès à la mémoire utilisateur."
  },
  ...memory.map(m => ({
    role: "user",
    content: m.message
  })),
  {
    role: "user",
    content: "Que t’ai-je dit la première fois ?"
  }
];

const payload = JSON.stringify({
  model: "gpt-4.1-mini",
  messages
});

const cmd = `
curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '${payload}'
`;

console.log(execSync(cmd).toString());
