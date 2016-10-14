const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: './public/js/app'
	},

	output: {
		path: './build',
		filename: 'app.bundle.js',
		publicPath: '/'
	},

	watch: true,

	devtool: 'source-map',

	resolve: {
		moduleDirectories: ['node_modules'],
		extensions: ['', '.js']
	},

	resolveLoader: {
		moduleDirectories: ['node_modules'],
		moduleTemplates: ['*-loader', '*'],
		extensions: ['', '.js']
	},

	module: {
		noParse: [/angular\\angular\.js$/, /angular-ui-router\\release\\angular-ui-router\.js$/],
		loaders: [
			{test: /\.js$/, include: path.resolve(__dirname, 'public/js'), loader: 'babel'},
			{test: /\.css$/, loader: 'style!css'},
			{test: /\.html$/, loader: 'raw'},
			{test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file'}
		]
	},

	devServer: {
		host: 'localhost',
		port: 8080,
		proxy: {
			'/api': {
				target: 'http://localhost:3000'
			}
		},
		contentBase: path.join(__dirname, 'public'),
		hot: true
	}
}