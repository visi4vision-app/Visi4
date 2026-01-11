import fs from "fs";
const FILE = "./data/emotions.json";

if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, JSON.stringify({}, null, 2));

export function logEmotion(uid, level) {
  const d = JSON.parse(fs.readFileSync(FILE));
  d[uid] = d[uid] || { calm:0, medium:0, high:0 };
  if (level === "LOW") d[uid].calm++;
  if (level === "MEDIUM") d[uid].medium++;
  if (level === "HIGH") d[uid].high++;
  fs.writeFileSync(FILE, JSON.stringify(d, null, 2));
  return d[uid];
}

export function getEmotionProfile(uid) {
  const d = JSON.parse(fs.readFileSync(FILE));
  return d[uid] || { calm:0, medium:0, high:0 };
}
