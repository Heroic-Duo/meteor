var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const meteorExternals = require('webpack-meteor-externals');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const resolve = dir => path.resolve(__dirname, dir);
const clientConfig = {
  entry: './client/main.js',
  output: {
    publicPath: '/',
    filename: 'build.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'vue-style-loader',
        { loader: 'css-loader' }
      ]
    },
    {
      test: /\.styl(us)?$/,
      use: [
        'vue-style-loader',
        { loader: 'css-loader' },
        { loader: 'stylus-loader' }
      ]
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          js: 'babel-loader',
          scss: [
            'style-loader',
            'css-loader',
            'stylus-loader'
          ]
        }
        // other vue-loader options go here
      }
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            "babelrc": false,
            "plugins": [
              "@babel/plugin-syntax-dynamic-import"
            ]
          }
        }
      ]
    },
    {
      test: /\.ts$/,
      loader: 'ts-loader',
      options: { appendTsSuffixTo: [/\.vue$/] }
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8].[ext]'
          }
        }
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8][ext]'
          }
        }
      ]
    }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'vue$': 'vue/dist/vue.min',
      '@client': resolve('imports/client'),
      '@lib': resolve('imports/lib'),
      '@api': resolve('imports/api'),
      '@server': resolve('imports/server'),
      '@pages': resolve('imports/client/pages')
    },
    extensions: ['.ts', '.js', '.vue', '.json']
  },
  externals: [meteorExternals()],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    hot: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './client/main.html'
    })
  ]
}

const serverConfig = {
  entry: './server/index.js',
  target: 'node',
  externals: [meteorExternals()],
  devServer: {
    hot: true
  },
};

module.exports = [clientConfig, serverConfig];