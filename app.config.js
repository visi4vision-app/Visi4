export default {
  expo: {
    name: "Visi4",
    slug: "visi4",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    splash: {
      image: "./assets/images/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    android: {
      package: "com.freemindvision.visi4",
      adaptiveIcon: {
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundColor: "#E6F4FE"
      }
    },
    web: {
      favicon: "./assets/images/favicon.png"
    },
    plugins: ["expo-router"]
  }
};
