export function requireAuth(req, res, next) {
  if (!req.uid) {
    return res.status(401).json({ error: "NON_AUTHENTIFIE" });
  }
  next();
}

export function requirePremium(req, res, next) {
  if (!req.user?.premium) {
    return res.status(403).json({ error: "ABONNEMENT_REQUIS" });
  }
  next();
}
