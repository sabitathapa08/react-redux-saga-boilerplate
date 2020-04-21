const path = require('path');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const DashboardPlugin = require('webpack-dashboard/plugin');

const baseConfig = require('./webpack.base.config.js');
module.exports = () => {
  return merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, '/public/'),
      hot: true,
    },
    plugins: [
      new BundleAnalyzerPlugin({ filename: './statistics.html' }),
      new DashboardPlugin(),
    ],
  });
};
