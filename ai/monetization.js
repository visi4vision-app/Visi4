import { brain } from "./brain.js";

export async function monetize(user) {
  return brain(
    "Choisis la meilleure stratégie de monétisation en Afrique (pub, abonnement, mobile money)",
    JSON.stringify(user)
  );
}
