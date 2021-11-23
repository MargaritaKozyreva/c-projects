const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevMode = true;

module.exports = {
	entry: {
		main: './src/index.tsx',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			'@core': path.resolve(__dirname, './src/core'),
			'@modules': path.resolve(__dirname, './src/modules'),
			'@components': path.resolve(__dirname, './src/components/'),
			'@icons': path.resolve(__dirname, './src/ui/components/icons'),
			'@ui': path.resolve(__dirname, './src/ui'),
		},
	},
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: 'auto',
		filename: 'bundle.js',
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},

		port: 4200,
		//disableHostCheck: true,
		historyApiFallback: true,
		hot: true,
	},
	optimization: {
		minimize: !isDevMode,
	},
	module: {
		rules: [
			{
				test: /\.(js|ts|tsx|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-modules-typescript-loader?modules',
					{
						loader: 'css-loader',
					},
					'sass-loader',
				],
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				use: {
					loader: 'file-loader',
				},
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
						},
					},
				],
			},
		],

	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'index.css',
		}),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
};