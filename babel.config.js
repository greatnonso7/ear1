module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.jsx', '.js', '.json'],
        alias: {
          screens: './src/screens',
          navigation: './src/navigation',
          components: './src/components',
          constants: './src/constants',
          images: './src/assets/images',
          theme: './src/theme',
        },
      },
    ],
  ],
};
