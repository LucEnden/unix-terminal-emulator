const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = merge(common, {
	output: {
		filename: "bundle.node.js",
		libraryTarget: "commonjs"
	}
});
