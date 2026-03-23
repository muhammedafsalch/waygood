const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// SVG transformer
config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");

// SVG config
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== "svg");
config.resolver.sourceExts.push("svg", "ts", "tsx");

module.exports = withNativeWind(config, {
  input: "./src/global.css",
});
