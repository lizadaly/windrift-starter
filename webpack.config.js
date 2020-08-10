const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = require("./story.json");
const path = require('path')
const PROD = (process.env.NODE_ENV === 'production')

var prodPlugins = PROD ? [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true
        },
        comments: false
    }),
   new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
           }
   })
  ] : [new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("develop")
        }
      })
    ]

module.exports = [{
  context: __dirname,
  entry: {
    starter: getEntrySources([
      './index.js'
    ]),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "story.js"
  },
  module: {
    rules: [
              { test: /\.js$/, loaders: ['babel-loader?cacheDirectory']},
              { test: /\.html$/, loader: 'html-loader'},
              { test: /\.hbs/, loader: 'handlebars-loader'},
              { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
              { test: /\.(png|jpg|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
    ]
  },
  plugins: [
    // Build our dist/index.html by reading from the config file and passing
    // those through to a template, written in Handlebars
    new HtmlWebpackPlugin({
      title: config.title,
      description: config.description,
      author: config.author,
      license: config.license,
      keywords: config.keywords,
      pagination: config.pagination,
      template: 'template.hbs'
    }),
    // Copy all static assets during a built to the dist/ directory.
    // If you add other directory names, they'll go in here.
    new CopyWebpackPlugin([
      { from: 'css', to: 'css' },
      { from: 'images', to: 'images' },
      { from: 'story.json'}
    ])
  ].concat(prodPlugins)
}];

function getEntrySources(sources) {
    if (!PROD) {
        sources.push('webpack-dev-server/client?http://localhost:8080');
    }
    return sources;
}
