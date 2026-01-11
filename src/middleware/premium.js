const limits = {
  free: 5,
  premium: 100
};

const usage = new Map();

export function premiumGuard(req, res, next) {
  const uid = req.user.uid;
  const tier = req.user.premium ? "premium" : "free";

  const key = `${uid}:${new Date().toDateString()}`;
  const count = usage.get(key) || 0;

  if (count >= limits[tier]) {
    return res.status(429).json({
      error: "LIMITE_ATTEINTE",
      upgrade: true
    });
  }

  usage.set(key, count + 1);
  next();
}
