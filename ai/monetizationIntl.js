export function monetizeIntl(user) {
  if (["BF","CI","SN","CM"].includes(user.country)) {
    return "Mobile Money / Abonnement local";
  }
  if (["FR","DE","US","CA"].includes(user.country)) {
    return "Carte bancaire / Abonnement premium";
  }
  return "Publicité intelligente";
}
