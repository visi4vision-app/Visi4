
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// ✅ Node 18 / EAS compatible (no toReversed)
if (Array.isArray(config.resolver.assetExts)) {
  config.resolver.assetExts = [...config.resolver.assetExts];
}

if (Array.isArray(config.resolver.sourceExts)) {
  config.resolver.sourceExts = [...config.resolver.sourceExts];
}

module.exports = config;	
