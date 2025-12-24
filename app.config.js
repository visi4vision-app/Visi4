export default {
  expo: {
    sdkVersion: "51.0.0",

    name: "Visi4",
    slug: "visi4",
    version: "1.0.0",

    extra: {
      eas: {
        projectId: "48700c55-8bd7-49c7-86d9-9a589f3a5c05"
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
