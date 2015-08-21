module.exports = {
	entry: {
		javascript: './app/js/boot.js',
		html: __dirname + '/app/index.html'
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist'
	},
	module: {
		loaders: [
			{ test: /\.jsx$/, loaders: ['jsx?harmony', 'babel-loader']}, //for jsx
			{ test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader']}, //for es6 should exclude node_module!
			{ test: /\.less$/, loaders: ['style-loader','css-loader','less-loader']}, // for less
			{ test: /\.(woff2|woff|svg|eot|ttf)$/, loaders: ['file-loader']}, //for bootstrap font file
			{ test: /\.(html|htm)$/, loaders: ['file-loader?name=[name].[ext]']} //for html & no change the name
		]
	}
}