const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const srcPath = path.resolve('./src')
const imagePath = path.resolve('./dist/images')

const basePlugins =
  [
    new webpack.EnvironmentPlugin([ 'BUILD_ENV' ]),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]

const prodPlugins =
  [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]

const plugins = process.env.BUILD_ENV === 'production'
  ? basePlugins.concat(prodPlugins)
  : basePlugins

const JSLoader = {
  test: /\.js$/,
  loaders: [
    'babel-loader',
    'eslint'
  ],
  include: __dirname,
  exclude: /node_modules/
}

const SASSLoader = {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract(
    'style-loader',
    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' +
    '!postcss-loader' +
    '!sass-loader?outputStyle=expanded'
  )
}

const CSSLoader = {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract(
    'style-loader',
    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' +
    '!postcss-loader'
  )
}

const ImageLoader = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  loaders: [
    'file?hash=sha512&digest=hex&name=[hash].[ext]',
    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
  ]
}

module.exports = {
  plugins,

  entry: [
    path.join(srcPath, 'app.js')
  ],

  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },

  devServer: {
    contentBase: path.resolve('./dist'),
    historyApiFallback: true
  },

  module: {
    loaders: [
      JSLoader,
      SASSLoader,
      CSSLoader,
      ImageLoader
    ]
  },

  resolve: {
    alias: {
      component: srcPath + '/component',
      driver: srcPath + '/driver',
      page: srcPath + '/page',
      util: srcPath + '/util',
      images: imagePath
    }
  }

}
