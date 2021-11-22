// нужна что бы взять куки
const fs = require('fs');

/*
 * Require Browsersync along with webpack and middleware for it
 */
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

/*
 * Require ./webpack.config.js and make a bundler from it
 */
const webpackConfig = require('./webpack.config');
const bundler = webpack(webpackConfig);

/*
 * Reload all devices when bundle is complete
 * or send a fullscreen error message to the browser instead
 */
bundler.hooks.done.tap('done', (stats) => {
	if (stats.hasErrors() || stats.hasWarnings()) {
		console.log(stats.toString());
	}
	browserSync.reload();
});

/*
 * Run Browsersync and use middleware for Hot Module Replacement
 */

//  куки нужны для того что бы подключиться к порталу без ввода пароля и тд
const cookies = fs.readFileSync('./cookie.txt').toString();
browserSync.init({
	watch: true,
	proxy: {
		target: 'https://clever.x5.ru/adaptation',
		proxyReq: [
			function(proxyReq) {
				proxyReq.setHeader('cookie', cookies);
			},
		],
	},
	rewriteRules: [
		{
			match: /<\/body>/i,
			fn: (req, res, match) => {
				// eslint-disable-next-line quotes
				return `</body><script async src="/bundle.js"></script>`;
			},
		},
	],

	logFileChanges: false,
	middleware: [
		webpackDevMiddleware(bundler, {
			publicPath: webpackConfig.output.publicPath,
			stats: {
				colors: true,
			},
		}),
		webpackHotMiddleware(bundler),
	],
	files: ['src/*.css', 'src/*.js'],
});

browserSync.reload();
