import fs from "fs";

const FILE = "./memory/users.json";

if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, JSON.stringify({}, null, 2));
}

export async function getMemory(uid) {
  const data = JSON.parse(fs.readFileSync(FILE));
  return data[uid] || {};
}

export async function saveMemory(uid, key, value) {
  const data = JSON.parse(fs.readFileSync(FILE));
  if (!data[uid]) data[uid] = {};
  data[uid][key] = value;
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}
