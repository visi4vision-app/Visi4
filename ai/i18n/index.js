import fs from "fs";

export function t(lang, key) {
  const file = fs.existsSync(`./ai/i18n/${lang}.json`)
    ? `./ai/i18n/${lang}.json`
    : "./ai/i18n/en.json";
  const dict = JSON.parse(fs.readFileSync(file));
  return dict[key] || key;
}
