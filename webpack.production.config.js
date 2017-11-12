
const Webpack = require('webpack'); // eslint-disable-line

module.exports = require('./webpack.config.js');

delete module.exports.output.pathinfo;
delete module.exports.devtool;
module.exports.plugins[0] = new Webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
});
