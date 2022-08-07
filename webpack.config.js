const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")
const webpack = require("webpack")
const TextEncodingPolyfill = require("text-encoding")
Object.assign(global, {
	TextEncoder: TextEncodingPolyfill.TextEncoder,
	TextDecoder: TextEncodingPolyfill.TextDecoder,
})

module.exports = {
	entry: {
		core: path.resolve('src', 'core', 'index.ts'),
    	react: path.resolve('src', 'react', 'index.tsx')
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].js",
		library: "UnixTerminalEmulator",
		libraryExport: "default",
		libraryTarget: "umd",
	},
	externals: {
		react: "react",
		"react-dom": "react-dom",
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
						presets: ["@babel/preset-typescript", "@babel/preset-react"],
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
