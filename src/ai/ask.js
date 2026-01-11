import fetch from "node-fetch";

/**
 * Détecte le comportement utilisateur (cerveau humain)
 */
function detectUserBehavior(question) {
  if (!question) return "standard";
  if (question.length < 30) return "pressé";
  if (/explique|pourquoi|comment/i.test(question)) return "curieux";
  if (/code|api|erreur|stack/i.test(question)) return "tech";
  return "standard";
}

/**
 * Fonction principale IA
 */
export async function askAI(question) {
  const behavior = detectUserBehavior(question);

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
Tu es Visi4, une IA intelligente et humaine.
Comportement utilisateur : ${behavior}

- pressé → réponse très courte
- curieux → réponse détaillée
- tech → réponse technique
- standard → réponse claire et simple
`
        },
        {
          role: "user",
          content: question
        }
      ]
    })
  });

  const data = await response.json();

  return {
    ok: true,
    behavior,
    answer: data.choices?.[0]?.message?.content || "Réponse indisponible",
    confidence: behavior === "pressé" ? 90 : 95
  };
}
