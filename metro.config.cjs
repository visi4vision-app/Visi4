const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.watchFolders = [];
config.resolver.blockList = [
  /node_modules\/.*\/test\/.*/,
  /node_modules\/.*\/__tests__\/.*/
];

config.server = {
  enhanceMiddleware: (middleware) => {
    return (req, res, next) => {
      return middleware(req, res, next);
    };
  },
};

module.exports = config;
