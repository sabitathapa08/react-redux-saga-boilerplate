const merge = require('webpack-merge');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = require('./webpack.base.config');

module.exports = () => {
  return merge(baseConfig, {
    mode: 'production',

    optimization: {
      minimizer: [new UglifyJsPlugin()],
    },
  });
};
