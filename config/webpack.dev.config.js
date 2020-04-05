const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

module.exports = () => {
  return merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, '/public/'),
      hot: true,
    },
  });
};
