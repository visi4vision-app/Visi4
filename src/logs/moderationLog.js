import fs from "fs";

export function logBlockedContent(data) {
  const line = JSON.stringify({
    ...data,
    createdAt: new Date()
  }) + "\n";

  fs.appendFileSync("blocked.log", line);
}
