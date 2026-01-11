import fs from "fs";

const FILE = "./ai/memory/behavior.json";

if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, JSON.stringify({}, null, 2));
}

function load() {
  return JSON.parse(fs.readFileSync(FILE));
}

function save(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

export function logIntervention({ uid, liveId, level, type }) {
  const data = load();
  data[uid] = data[uid] || {
    warnings: 0,
    mediations: 0,
    blocks: 0,
    history: []
  };

  if (type === "WARNING") data[uid].warnings++;
  if (type === "MEDIATION") data[uid].mediations++;
  if (type === "BLOCK") data[uid].blocks++;

  data[uid].history.push({
    date: new Date().toISOString(),
    liveId,
    level,
    type
  });

  save(data);
}

export function getBehaviorScore(uid) {
  const data = load();
  const u = data[uid];
  if (!u) return 0;

  return (u.mediations * 1) + (u.warnings * 2) + (u.blocks * 5);
}

export function getAllStats() {
  return load();
}
