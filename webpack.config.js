var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build/public/');
var APP_DIR = path.resolve(__dirname, 'app/');
var IMAGES_DIR = path.resolve(__dirname, 'app/images/');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
   loaders : [
     {
       test : /\.jsx?/,
       include : APP_DIR,
       loader : 'babel'
     },
     {
       test: /\.less$/,
       loader: "style!css!less"
     },
     {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader:  'url'
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file?name=public/fonts/[name].[ext]'
    },
   ]
  }
};

module.exports = config;
