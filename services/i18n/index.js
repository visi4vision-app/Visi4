import * as Localization from "expo-localization";

export const locale = Localization.locale;
export const country = Localization.region || "US";

export function matchCountry(contentCountry, userCountry) {
  return contentCountry === userCountry;
}
