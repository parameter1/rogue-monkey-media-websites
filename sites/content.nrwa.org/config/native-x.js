const configureNativeX = require('@rogue-monkey-media/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '61f87de43b0b4800018ce438' },
  ]);

module.exports = config;
