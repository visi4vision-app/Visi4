const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Node 18 compatible (NO toReversed)
if (Array.isArray(config.resolver.assetExts)) {
  config.resolver.assetExts = [...config.resolver.assetExts].reverse();
}

module.exports = config;
