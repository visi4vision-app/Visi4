export default {
  expo: {
    name: "Visi4",
    slug: "visi4",
    icon: "./assets/icon.png",

    splash: {
      image: "./assets/icon.png",
      resizeMode: "contain",
      backgroundColor: "#000000"
    },

    android: {
      package: "com.freemindvision.visi4",
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
        backgroundColor: "#000000"
      }
    },

    web: {
      favicon: "./assets/icon.png"
    },

    plugins: ["expo-router"]
  }
};
