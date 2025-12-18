export default {
  expo: {
    name: "Visi4",
    slug: "visi4",
    version: "1.0.0",

    extra: {
      eas: {
        projectId: "0579506f-74ca-4c22-ad07-744049c10b89"
      }
    },

    assetBundlePatterns: ["assets/*"],

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
    },

    ios: {
      bundleIdentifier: "com.freemindvision.visi4"
    }
  }
};
