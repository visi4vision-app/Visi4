import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// 🔥 CONFIG FIREBASE (mets la tienne)
const firebaseConfig = {
  apiKey: "TA_API_KEY",
  authDomain: "TON_AUTH_DOMAIN",
  projectId: "TON_PROJECT_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🌍 DRAPEAUX DE TOUS LES PAYS (emoji)
const flags = [
  { name: "Burkina Faso", icon: "🇧🇫" },
  { name: "France", icon: "🇫🇷" },
  { name: "États-Unis", icon: "🇺🇸" },
  { name: "Canada", icon: "🇨🇦" },
  { name: "Nigeria", icon: "🇳🇬" },
  { name: "Côte d’Ivoire", icon: "🇨🇮" },
  { name: "Sénégal", icon: "🇸🇳" },
  { name: "Ghana", icon: "🇬🇭" },
  { name: "Maroc", icon: "🇲🇦" },
  { name: "Algérie", icon: "🇩🇿" },
  { name: "Tunisie", icon: "🇹🇳" },
  { name: "Afrique du Sud", icon: "🇿🇦" },
  { name: "Brésil", icon: "🇧🇷" },
  { name: "Argentine", icon: "🇦🇷" },
  { name: "Allemagne", icon: "🇩🇪" },
  { name: "Italie", icon: "🇮🇹" },
  { name: "Espagne", icon: "🇪🇸" },
  { name: "Portugal", icon: "🇵🇹" },
  { name: "Royaume-Uni", icon: "🇬🇧" },
  { name: "Chine", icon: "🇨🇳" },
  { name: "Japon", icon: "🇯🇵" },
  { name: "Corée du Sud", icon: "🇰🇷" },
  { name: "Inde", icon: "🇮🇳" },
  { name: "Russie", icon: "🇷🇺" },
  { name: "Arabie Saoudite", icon: "🇸🇦" },
  { name: "Turquie", icon: "🇹🇷" },
];

// 🎁 CADEAUX CLASSIQUES
const gifts = [
  { name: "Rose", icon: "🌹", price: 10 },
  { name: "Cœur", icon: "❤️", price: 10 },
  { name: "Feu", icon: "🔥", price: 20 },
  { name: "Couronne", icon: "👑", price: 50 },
  { name: "Diamant", icon: "💎", price: 100 },
  { name: "Voiture", icon: "🚗", price: 200 },
  { name: "Avion", icon: "✈️", price: 300 },
];

// 🚀 INSERTION
const run = async () => {
  console.log("Création des drapeaux...");
  for (const country of flags) {
    await addDoc(collection(db, "gifts"), {
      name: `Drapeau ${country.name}`,
      icon: country.icon,
      price: 10,
      type: "flag",
    });
  }

  console.log("Création des cadeaux classiques...");
  for (const gift of gifts) {
    await addDoc(collection(db, "gifts"), {
      ...gift,
      type: "classic",
    });
  }

  console.log("✅ Tous les cadeaux ont été créés !");
  process.exit();
};

run();
const cheapGifts = [
  { name: "Like", icon: "👍", price: 5 },
  { name: "Smile", icon: "😊", price: 5 },
  { name: "Clap", icon: "👏", price: 5 },
  { name: "Étoile", icon: "⭐", price: 10 },
  { name: "Fleur", icon: "🌸", price: 10 },
  { name: "Feu", icon: "🔥", price: 10 },
  { name: "Bisou", icon: "😘", price: 10 },
];
const mediumGifts = [
  { name: "Cœur animé", icon: "💖", price: 20 },
  { name: "Boom", icon: "💥", price: 30 },
  { name: "Couronne", icon: "👑", price: 50 },
  { name: "Trophée", icon: "🏆", price: 50 },
  { name: "Fusée", icon: "🚀", price: 60 },
  { name: "Sac d’or", icon: "💰", price: 80 },
];const premiumGifts = [
  { name: "Diamant", icon: "💎", price: 100 },
  { name: "Anneau en or", icon: "💍", price: 150 },
  { name: "Voiture de luxe", icon: "🏎️", price: 200 },
  { name: "Jet privé", icon: "🛩️", price: 300 },
  { name: "Yacht", icon: "🛥️", price: 400 },
  { name: "Château", icon: "🏰", price: 500 },
];
const ultraGifts = [
  { name: "Pluie de diamants", icon: "💎💎", price: 800 },
  { name: "Trône royal", icon: "👑✨", price: 1000 },
  { name: "Explosion d’or", icon: "💥💰", price: 1500 },
  { name: "Couronne divine", icon: "👑🔥", price: 2000 },
  { name: "Visi4 Legend", icon: "🌍👑", price: 3000 },
];

const allExtraGifts = [
  ...cheapGifts.map(g => ({ ...g, type: "cheap" })),
  ...mediumGifts.map(g => ({ ...g, type: "medium" })),
  ...premiumGifts.map(g => ({ ...g, type: "premium" })),
  ...ultraGifts.map(g => ({ ...g, type: "ultra" })),
];

console.log("Ajout des cadeaux supplémentaires...");
for (const gift of allExtraGifts) {
  await addDoc(collection(db, "gifts"), gift);
}
