const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
    	jsOne:'./js/index.js',
//    入口css文件
//  	base1:["./css/base.css","./css/index.css"],
    	},
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'index1.js'
    },
//css文件分离
//  module: {
//      rules: [
//      {
//        test: /\.css/,  
//        use: ExtractTextPlugin.extract({  
//                  fallback: 'style-loader',  
//                  use: [  
//                      'css-loader',  
//                      'autoprefixer-loader'  
//                  ]  
//              }) 
//      },
//      {  
//        test: /\.png$/,  
//        // use: 'url-loader?limit=1024&name=[path][name].[ext]&publicPath=output/',  
//        use: 'url-loader?limit=1024&name=[path][name].[ext]&publicPath=./',  
//      },  
//      {  
//        test: /\.jpg$/,  
//        // use: 'url-loader?limit=1024&name=[path][name].[ext]&publicPath=output/',  
//        use: 'url-loader?limit=1024&name=[path][name].[ext]&publicPath=./',  
//      }, 
//    ]
//  },
    plugins: [
//  		new ExtractTextPlugin("./css/common.css"),
//  		new ExtractTextPlugin("./[name]-two.css"),
        new UglifyJSPlugin()
    ]
}