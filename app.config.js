export default {
  expo: {
    name: "Visi4",
    slug: "visi4",
    version: "1.0.0",
    scheme: "visi4",
    orientation: "portrait",

    assetBundlePatterns: ["assets/*"],

    icon: "./assets/icon.png",

    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#000000"
    },

    ios: {
      bundleIdentifier: "com.freemindvision.visi4",
      supportsTablet: true
    },

    android: {
      package: "com.freemindvision.visi4",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#000000"
      }
    },

    extra: {
      eas: {
        projectId: "AUTO"
      }
    }
  }
};
