export function authMiddleware(req, res, next) {
  const publicRoutes = [
    '/',
    '/health',
    '/status'
  ];

  if (publicRoutes.includes(req.path)) {
    return next();
  }

  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ error: "NO_TOKEN" });
  }

  next();
}
