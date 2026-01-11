import fs from "fs";
import path from "path";

const DB_PATH = path.resolve("backend/ai/memory/data.json");

function readDB() {
  if (!fs.existsSync(DB_PATH)) return {};
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8") || "{}");
}

function writeDB(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

export async function saveMemory(uid, key, value) {
  const db = readDB();
  if (!db[uid]) db[uid] = {};
  db[uid][key] = value;
  writeDB(db);
}

export async function getMemory(uid) {
  const db = readDB();
  return db[uid] || {};
}
