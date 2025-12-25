export default {
  expo: {
    owner: "freemindvision_app",

    name: "Visi4",
    slug: "visi4",
    version: "1.0.4",
    sdkVersion: "51.0.0",

    icon: "./assets/logo.png",

    assetBundlePatterns: ["assets/*"],

    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#000000"
    },

    android: {
      package: "com.freemindvision.visi4",
      adaptiveIcon: {
        foregroundImage: "./assets/logo.png",
        backgroundColor: "#000000"
      }
    },

    ios: {
      bundleIdentifier: "com.freemindvision.visi4"
    }
  }
};
