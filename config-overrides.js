const path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components');
  config.resolve.alias['@styles'] = path.resolve(__dirname, 'src/styles');
  config.resolve.alias['@sharedTypes'] = path.resolve(__dirname, 'src/types');
  config.resolve.alias['@contexts'] = path.resolve(__dirname, 'src/contexts');
  config.resolve.alias['@query'] = path.resolve(__dirname, 'src/query');
  config.resolve.alias['@pages'] = path.resolve(__dirname, 'src/pages');
  config.resolve.alias['@state'] = path.resolve(__dirname, 'src/state');
  config.resolve.alias['@assets'] = path.resolve(__dirname, 'src/assets');
  return config;
};