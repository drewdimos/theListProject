module.exports = {
	entry: './builds/process/js/app.js',
	output: {
		path:'../dev',
		filename: 'bundle.js',
		publicPath: 'dev'
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