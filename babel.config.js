module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          screen: './src/screen',
          route: './src/route',
          helpers: './src/helpers',
          assets: './src/assets',
          components: './src/components',
          store: './src/store',
        },
      },
    ],
  ],
};
