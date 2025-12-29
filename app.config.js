export default ({ config }) => {
  return {
    ...config,

    name: "Visi4",
    slug: "visi4",
    owner: "visi4vision-app",

    android: {
      package: "com.visi4vision.visi4"
    },

    ios: {
      bundleIdentifier: "com.visi4vision.visi4"
    },

    extra: {
      eas: {
        projectId: "ecd4ae36-6f94-4cc0-aa2e-efc39ed3ea49"
      }
    }
  };
};
