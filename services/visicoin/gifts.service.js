// ===============================
// 🎁 VisiCoin Gifts System
// ===============================

export const gifts = [];
// ================================
// 🎁 VisiCoin Gifts System (5000+)
// ================================

// 💱 Conversion
export const USD_TO_VISICOIN = 100;

// 💰 Prix drapeau (10 USD)
export const FLAG_PRICE_USD = 10;
export const FLAG_PRICE = FLAG_PRICE_USD * USD_TO_VISICOIN; // 1000 VisiCoin

// 🌍 TOUS LES DRAPEAUX (ISO 3166-1 alpha-2)
const COUNTRY_CODES = [
  "AF","AL","DZ","AS","AD","AO","AI","AG","AR","AM","AU","AT","AZ",
  "BS","BH","BD","BB","BY","BE","BZ","BJ","BT","BO","BA","BW","BR",
  "BN","BG","BF","BI","KH","CM","CA","CV","CF","TD","CL","CN","CO",
  "KM","CG","CD","CR","CI","HR","CU","CY","CZ","DK","DJ","DO","EC",
  "EG","SV","GQ","ER","EE","ET","FJ","FI","FR","GA","GM","GE","DE",
  "GH","GR","GD","GT","GN","GW","GY","HT","HN","HU","IS","IN","ID",
  "IR","IQ","IE","IL","IT","JM","JP","JO","KZ","KE","KW","KG","LA",
  "LV","LB","LS","LR","LY","LT","LU","MG","MW","MY","MV","ML","MT",
  "MR","MU","MX","MD","MN","ME","MA","MZ","MM","NA","NP","NL","NZ",
  "NI","NE","NG","KP","NO","OM","PK","PA","PG","PY","PE","PH","PL",
  "PT","QA","RO","RU","RW","SA","SN","RS","SC","SL","SG","SK","SI",
  "SO","ZA","KR","ES","LK","SD","SR","SE","CH","SY","TW","TJ","TZ",
  "TH","TG","TN","TR","UG","UA","AE","GB","US","UY","UZ","VE","VN",
  "YE","ZM","ZW"
];

// 🎌 Emoji drapeau depuis code pays
function flagEmoji(code) {
  return code
    .toUpperCase()
    .replace(/./g, char =>
      String.fromCodePoint(127397 + char.charCodeAt())
    );
}

// 🎁 LISTE FINALE
export const gifts = [];

// ================================
// 🌍 1️⃣ CADEAUX DRAPEAUX (PRIX FIXE)
// ================================
COUNTRY_CODES.forEach(code => {
  gifts.push({
    id: `flag_${code}`,
    name: `${flagEmoji(code)} Drapeau ${code}`,
    type: "flag",
    price: FLAG_PRICE, // 1000 VisiCoin
    animated: true,
  });
});

// ===================================
// 🎉 2️⃣ AUTRES CADEAUX (TIKTOK STYLE)
// ===================================
const PREMIUM_GIFTS = [
  { id: "rose", name: "🌹 Rose", usd: 1 },
  { id: "fire", name: "🔥 Fire", usd: 2 },
  { id: "heart", name: "❤️ Heart", usd: 3 },
  { id: "diamond", name: "💎 Diamond", usd: 5 },
  { id: "lion", name: "🦁 Lion", usd: 20 },
  { id: "castle", name: "🏰 Castle", usd: 50 },
  { id: "rocket", name: "🚀 Rocket", usd: 100 },
];

const LEVELS = [1,2,3,4,5];


PREMIUM_GIFTS.forEach(gift => {
  LEVELS.forEach(level => {
    gifts.push({
      id: `${gift.id}_lv${level}`,
      name: `${gift.name} Lv${level}`,
      type: "premium",
      level,
      price: gift.usd * USD_TO_VISICOIN * level,
      animated: true,
    });
  });
});

// ================================
// 🔢 INFO
// ================================
console.log("🎁 Total gifts generated:", gifts.length);
// ===============================
// 🔥 GENERATE 5000+ GIFTS
// ===============================

const COLORS = ["red","blue","gold","purple","green","pink","black","white"];
const EFFECTS = ["fire","ice","light","shadow","electric","magic","neon"];
const TIERS = [1,2,3,4,5,6,7,8,9,10];

let counter = gifts.length;

PREMIUM_GIFTS.forEach(gift => {
  COLORS.forEach(color => {
    EFFECTS.forEach(effect => {
      TIERS.forEach(tier => {
        gifts.push({
          id: `${gift.id}_${color}_${effect}_t${tier}`,
          name: `${gift.name} ${color} ${effect} T${tier}`,
          type: "premium",
          tier,
          color,
          effect,
          price: gift.usd * USD_TO_VISICOIN * tier,
          animated: true,
        });
        counter++;
      });
    });
  });
});

console.log("🎁 TOTAL GIFTS:", counter);

