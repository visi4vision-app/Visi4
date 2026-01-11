import fs from "fs";

export function alertAdmin(data) {
  const log = `./logs/admin_alerts.log`;
  const line = `[${new Date().toISOString()}] ${JSON.stringify(data)}\n`;
  fs.appendFileSync(log, line);
  console.log("🚨 ADMIN ALERT:", data);
}
