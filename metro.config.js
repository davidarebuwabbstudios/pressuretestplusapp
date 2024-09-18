const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
//const config = {};
// const config = {
//     transformer: {
//       getTransformOptions: async () => ({
//         transform: {
//           experimentalImportSupport: false,
//           inlineRequires: false,
//         },
//       }),
//     },
//     resolver: {
//       sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs', 'json'] 
//     },
//   };

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);
const defaultConfig = getDefaultConfig(__dirname);

const {
  resolver: { sourceExts, assetExts },
} = getDefaultConfig(__dirname);

const config  = {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs', 'json','svg'] 
    },
  };

  module.exports = mergeConfig(defaultConfig, config);
