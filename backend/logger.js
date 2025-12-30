import fs from "fs";
export function logDecision(data) {
  fs.appendFileSync(
    "moderation.log",
    JSON.stringify({ ...data, date: new Date() }) + "\n"
  );
}
