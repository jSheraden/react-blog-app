var path = require('path');

module.exports = {
  entry: {
    app: ['./public/javascripts/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'public/javascripts/build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
  	loaders: [
  	  {
        test: path.join(__dirname, 'public/javascripts'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        }
      }
  	]
  }
};
