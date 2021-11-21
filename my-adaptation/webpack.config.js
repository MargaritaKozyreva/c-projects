const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const targetUrl = 'https://clever.x5.ru';

const PATHS = {
	build: path.join(__dirname, 'build'),
	dev: path.join(__dirname, 'dist')
};

const webpackConfig = (env, args) => {
	const isDevMode = args.mode === 'development';

	return {
		entry: {
			main: './index.tsx'
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js'],
			alias: {
				'@core': path.resolve(__dirname, './src/core'),
				'@modules': path.resolve(__dirname, './src/modules'),
				'@components': path.resolve(__dirname, './src/components/'),
				'@icons': path.resolve(__dirname, './src/ui/components/icons'),
				'@ui': path.resolve(__dirname, './src/ui')
			}
		},
		output: {
			path: PATHS.build,
			publicPath: 'auto',
			filename: 'main.[hash].js'
		},
		devServer: {

			static: {
				directory: path.join(__dirname, 'public')
			},

			port: 4200,
			//disableHostCheck: true,
			historyApiFallback: true,
			hot: true
		},
		optimization: {
			minimize: !isDevMode
		},
		module: {
			rules: [
				{
					test: /\.(js|ts|tsx|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'ts-loader'
					}
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.scss$/,
					use: [
						'style-loader',
						'css-modules-typescript-loader?modules',
						{
							loader: 'css-loader'
						},
						'sass-loader'
					]
				},
				{
					test: /\.(jpe?g|png|gif)$/i,
					use: {
						loader: 'file-loader'
					}
				},
				{
					test: /\.svg$/,
					use: ['@svgr/webpack']
				},
				{
					test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'fonts/'
							}
						}
					]
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './index.html'
			}),
			new MiniCssExtractPlugin({
				filename: '[name].[hash].css'
			}),
			new CleanWebpackPlugin()
		]
	};
};

module.exports = (env, args) => {
	const config = webpackConfig(env, args);
	config.devtool = 'eval-source-map';
	return config;
};
