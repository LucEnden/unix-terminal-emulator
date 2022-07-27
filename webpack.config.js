const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
	entry: "./src/index.ts",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "index.js",
		library: "UnixTerminalEmulator",
		libraryExport: "default",
		libraryTarget: "umd",
	},
	devtool: "inline-source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.m?(ts|tsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-typescript"],
						plugins: [],
					},
				},
			},
			{
				test: /\.css$/i,
				exclude: /(node_modules|bower_components)/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
				parallel: true,
			}),
		],
	},
}
