import { t } from "./i18n/index.js";

export function notifyIntl(user, key) {
  return t(user.lang || "en", key);
}
