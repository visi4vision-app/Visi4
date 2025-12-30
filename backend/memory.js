import fs from "fs";

export function getMemory(uid) {
  const path = `memory/${uid}.json`;
  if (!fs.existsSync(path)) return {};
  return JSON.parse(fs.readFileSync(path));
}

export function saveMemory(uid, data) {
  fs.writeFileSync(`memory/${uid}.json`, JSON.stringify(data, null, 2));
}
