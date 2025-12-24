import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "MET_TA_CLE",
  authDomain: "MET_TA_CLE.firebaseapp.com",
  projectId: "MET_TA_CLE",
  storageBucket: "MET_TA_CLE.appspot.com",
  messagingSenderId: "MET_TA_CLE",
  appId: "MET_TA_CLE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
