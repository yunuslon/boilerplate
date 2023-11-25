module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          screen: './src/screen',
          navigation: './src/navigation',
          helpers: './src/helpers',
          assets: './src/assets',
          components: './src/components',
          store: './src/store',
          shared: './src/shared',
        },
      },
    ],
  ],
};
