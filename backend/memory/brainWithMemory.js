import fs from "fs";

const DB_PATH = "./memory/users.json";

function loadDB() {
  if (!fs.existsSync(DB_PATH)) return {};
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

function saveDB(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

export async function brainWithMemory({ uid, question, lang = "fr", role = "user" }) {
  const db = loadDB();
  db[uid] = db[uid] || { memory: [] };

  if (question.toLowerCase().includes("je m'appelle")) {
    const name = question.split(" ").pop();
    db[uid].name = name;
    db[uid].memory.push(`Nom:${name}`);
  }

  saveDB(db);

  return {
    answer: `Je suis le cerveau central de Visi4. Je suis ton assistant personnel.`
  };
}
