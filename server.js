const express = require('express');
const next = require('next');
const moduleAlias = require('module-alias');

const port = process.env.PORT || 2017;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

moduleAlias.addAlias('react-native', 'react-native-web');

// Hot reload server module by watch and inject changes
if (dev) {
	const chokidar = require('chokidar');
	const watcher = chokidar.watch('./server');

	watcher.on('ready', function() {
		watcher.on('all', function() {
			Object.keys(require.cache).forEach(function(id) {
				if (/[\/\\]server[\/\\]/.test(id)) {
					delete require.cache[id];
				}
			});

			console.log("Server was hot updated..");
		})
	});
}

app.prepare()
	.then(() => {
		// Temporary fix for Bodymovin.. on server side
		global.requestAnimationFrame = () => {};
		global.document = {
			createElement: () => ({ getContext: () => {} }),
			createElementNS: () => ({ getContext: () => {} }),
			getElementsByTagName: () => ({ getContext: () => {} }),
		};
		global.navigator = {
			userAgent: 'user-agent',
			isServer: true,
		};

		server.use(function (req, res, next) {
			const router = dev ?
				require('./server/router') : require('./.server/router');

			router(req, res, next);
		});

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		if (module === require.main) {
			server.listen(port, (err) => {
				if (err) throw err;
				console.log(`Server is running under port ${port}`);
			});
		}
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});

module.exports = server;
