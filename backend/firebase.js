let firebase = null;

if (process.env.DISABLE_FIREBASE === "true") {
  console.log("🔥 Firebase désactivé (DEV MODE)");
} else {
  throw new Error("Firebase PROD non configuré");
}

export default firebase;
