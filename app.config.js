export default {
  expo: {
    name: "Visi4",
    slug: "visi4",
    version: "1.0.0",

    assetBundlePatterns: [
      "assets/*"
    ],

    icon: "./assets/icon.png",

    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#000000"
    },

    android: {
      package: "com.freemindvision.visi4",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#000000"
      }
    }
  }
}
