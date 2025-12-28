import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const app = initializeApp({
  apiKey: "XXX",
  authDomain: "XXX",
  projectId: "freemind-app"
});

export const auth = getAuth(app);
