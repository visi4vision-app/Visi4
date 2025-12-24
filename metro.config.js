const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// ❌ PAS de toReversed (Node 20 only)
// ✅ Compatible Node 18 (GitHub Actions / EAS)
if (Array.isArray(config.resolver.assetExts)) {
  config.resolver.assetExts = [...config.resolver.assetExts].reverse();
}

module.exports = config;
