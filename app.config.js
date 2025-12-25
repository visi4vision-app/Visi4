export default ({ config }) => ({
  ...config,
  name: "Visi4",
  slug: "visi4",
  owner: "freemindvision_app",

  android: {
    package: "com.freemindvision.visi4"
  },

  ios: {
    bundleIdentifier: "com.freemindvision.visi4"
  },

  extra: {
    eas: {
      projectId: "48700c55-8bd7-49c7-86d9-9a589f3a5c05"
    }
  }
});
