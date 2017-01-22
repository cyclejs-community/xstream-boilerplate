const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const srcPath = path.resolve('./src')
const imagePath = path.resolve('./dist/images')

const basePlugins =
  [
    new webpack.EnvironmentPlugin([ 'BUILD_ENV' ]),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({ filename: 'styles.css', disable: false, allChunks: true })
  ]

const browserSync = [
  new BrowserSyncPlugin({
    host: 'localhost',
    port: 3100,
    proxy: 'http://localhost:8080/'
  }, {
    reload: false
  })
]

const devPlugins = [
  new webpack.LoaderOptionsPlugin({
    debug: true
  }),
  new webpack.HotModuleReplacementPlugin(),
  ...browserSync
]

const prodPlugins =
  [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]

const plugins = process.env.BUILD_ENV === 'production'
  ? basePlugins.concat(prodPlugins)
  : basePlugins.concat(devPlugins)

const JSLoader = {
  test: /\.js$/,
  use: [
    {
      loader: 'babel-loader'
    },
    {
      loader: 'eslint-loader'
    }
  ],
  include: __dirname,
  exclude: /node_modules/
}

const SASSLoader = {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract({
    loader: 'css-loader!sass-loader'
  })
}

const CSSLoader = {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    fallbackLoader: 'style-loader',
    loader: 'css-loader'
  })
}

const ImageLoader = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  loaders: [
    'file?hash=sha512&digest=hex&name=[hash].[ext]',
    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
  ]
}

const environmentOptions =
  process.env.BUILD_ENV === 'production'
  ? { }
  : { devtool: 'eval' }

const devEntry = [
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server'
]

const defaultEntry = [path.join(srcPath, 'app.js')]

const entry =
  process.env.BUILD_ENV === 'production'
  ? defaultEntry
  : devEntry.concat(defaultEntry)

module.exports = {
  plugins,

  ...environmentOptions,

  entry,

  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },

  devServer: {
    hot: true,
    stats: {colors: true},
    contentBase: path.resolve('./dist'),
    historyApiFallback: true
  },

  module: {
    rules: [
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
