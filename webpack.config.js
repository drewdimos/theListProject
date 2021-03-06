var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './builds/process/js/app.js',
	output: {
		path: './builds/dev',
		filename: 'bundle.js',
	},
	devServer: {
		inline: true,
		contentBase: 'builds/dev',
		port: '3000'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude:/(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015','react']

				}
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	}
};