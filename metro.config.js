const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Compatible Node 18 (GitHub Actions / EAS)
// ❌ PAS de toReversed (Node 20 only)
if (Array.isArray(config.resolver.assetExts)) {
  config.resolver.assetExts = [...config.resolver.assetExts].reverse();
}

module.exports = config;
