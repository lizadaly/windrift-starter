var webpack = require('webpack');

module.exports = [{
  context: __dirname,
  entry: {
    starter: getEntrySources([
      './index.js'
    ]),
  },
  output: {
    path: __dirname,
    filename: "story.js"
  },
  module: {
    loaders: [{
        test: /.js/,
        loaders: ['babel?cacheDirectory']
      }, {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}
];

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
    }

    return sources;
}
