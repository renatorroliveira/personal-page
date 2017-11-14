const Webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    main: ['./index.html', './src/index.jsx'],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-bundle.js',
    publicPath: '/',
    pathinfo: true,
  },

  devtool: '#eval-cheap-module-source-map',

  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
    compress: true,
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.json', '.scss', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed',
            },
          },
        ],
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader'],
      }, {
        test: /\.html$|\.ico$/,
        loader: 'file-loader?name=[name].[ext]',
      }, {
        test: /\.(jpg|png|svg)(\?v=[0-9].[0-9].[0-9])?$/,
        loader: 'file-loader?name=images/[name].[ext]',
      }, {
        test: /\.(woff|woff2|ttf|eot)(\?v=[0-9].[0-9].[0-9])?$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },

};
