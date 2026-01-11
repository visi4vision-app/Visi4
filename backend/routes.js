import { genUserSig } from "./trtc/usersig.js";

export function registerRoutes(app) {

  app.post("/trtc/token", (req, res) => {
    const { userId } = req.body;
    const token = genUserSig(userId);
    res.json(token);
  });

}
