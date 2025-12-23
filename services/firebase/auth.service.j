import { signInAnonymously } from "firebase/auth";
import { auth } from "./firebase.config";

export async function anonymousLogin() {
  return await signInAnonymously(auth);
}
