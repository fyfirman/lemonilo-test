module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "root": [
          "./src"
        ],
        "alias": {
          "@test": "./src/__test__",
          "@assets": "./src/assets",
          "@constants": "./src/constants",
          "@components": "./src/components",
          "@router": "./src/router",
          "@theme": "./src/theme",
          "@screens": "./src/screens",
          "@utils": "./src/utils",
        },
      } 
    ], 
  ],
};
