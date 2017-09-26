const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const fsExtra = require('fs-extra');

// console.log('Copying production serverless configs..');
// fsExtra.copy('./serverless.prod.yml', './service/serverless.yml')
// 	.catch(error => console.log(error));

console.log('Bundling server...');

// Exclude node_module stuffs
let nodeModules = {};
fs.readdirSync('node_modules')
	.filter(function(x) {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(function(mod) {
		nodeModules[mod] = 'commonjs ' + mod;
	});

module.exports = {
	entry: './server/router.js',
	target: 'node',
	output: {
		path: path.join(__dirname, '.server'),
		libraryTarget: "commonjs2",
		filename: 'router.js'
	},
	module: {
		rules: [{
			test: /\.js?$/,
			loaders: ['babel-loader'],
		}],
	},
	externals: nodeModules,
};