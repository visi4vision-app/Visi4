import fs from "fs";
const FILE = "./memory/social.json";

if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, JSON.stringify({}));

export function getSocialScore(uid) {
  const d = JSON.parse(fs.readFileSync(FILE));
  return d[uid] || 50;
}

export function updateSocialScore(uid, delta) {
  const d = JSON.parse(fs.readFileSync(FILE));
  d[uid] = Math.max(0, (d[uid] || 50) + delta);
  fs.writeFileSync(FILE, JSON.stringify(d, null, 2));
}
