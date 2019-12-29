const path = require( 'path' );
const fs = require( 'fs' );
const webpack = require( 'webpack' );
const { CheckerPlugin } = require( 'awesome-typescript-loader' );
let ROOT = path.resolve(__dirname);
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  output: {
    path: ROOT + '/dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.map.js'
  },
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.ts[x]$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/,
        include: ROOT + '/src',
        use: [
          'style-loader',
          "@teamsupercell/typings-for-css-modules-loader",
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.png/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 20
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.png'],
    alias: {
      '@': path.resolve(ROOT, 'src')
    }
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}