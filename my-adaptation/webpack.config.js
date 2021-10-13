const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
				'@ui': path.resolve(__dirname, '../../ui'),
			}
		},
		output: {
			path: PATHS.build,
			publicPath: 'auto',
			filename: 'main.[hash].js'
		},
		devServer: {

			static: {
				directory: path.join(__dirname, 'public'),
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
					test: /\.(sa|sc|c)ss$/,
					use: [
						MiniCssExtractPlugin.loader, {
							loader: 'css-loader',
							options: {
								sourceMap: true,
								url: false,
								modules: {
									localIdentName: isDevMode ? '[local]' : '[hash:base64:5]'
								}
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				},
				{
					test: /\.(jpe?g|png|gif)$/i,
					use: {
						loader: 'file-loader',
						options: {
							name: '../../ui/design/static/icons/[name].[ext]'
						}
					}
				},
				{
					test: /\.svg$/,
					use: ['@svgr/webpack'],
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './index.html'
			}),
			new MiniCssExtractPlugin({
				filename: '[name].[hash].css',
			}),
			new CleanWebpackPlugin(),
			new CopyWebpackPlugin({
				patterns: [{
					from: path.join('../../ui/design/static/icons'),
					to: path.join(isDevMode ? '' : PATHS.build, 'static/icons'),
				}]
			}),
		]
	};
};

module.exports = (env, args) => {
	const config = webpackConfig(env, args);
	if (args.mode === 'development') {
		config.devtool = 'source-map';
		// config.optimization = false;
	}
	return config;
};