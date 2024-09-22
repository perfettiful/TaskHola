module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@utils': './src/utils',
            '@service': './src/service',
            '@routes': './src/routes',
            '@interfaces': './src/interfaces',
            '@locales': './src/i18n',
          },
        },
      ],
    ],
  };
};
