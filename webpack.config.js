const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")
const webpack = require("webpack")

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
		fallback: {
			util: require.resolve("util/"),
		},
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
	plugins: [
		// fix "process is not defined" error (do "npm install process" before running the build):
		new webpack.ProvidePlugin({
			process: "process/browser",
		}),
	],
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
