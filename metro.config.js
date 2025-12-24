const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Compatibilité Node 18 (EAS)
if (Array.isArray(config.resolver.assetExts)) {
  config.resolver.assetExts = [...config.resolver.assetExts].reverse();
}

module.exports = config;
