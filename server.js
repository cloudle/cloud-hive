const express = require('express');
const serverUtils = require('./serverUtils');

const port = process.env.PORT || 2017;
const dev = process.env.NODE_ENV !== 'production';
const useNextSSR = process.env.USE_NEXT !== 'false';
const server = express();

if (dev) serverUtils.watchAndHotInject();

server.use(function (req, res, next) {
	const router = dev ?
		require('./server/router') : require('./.server/router');

	router(req, res, next);
});

serverUtils.conditionallyInjectNextSSR(server, dev, useNextSSR).then((server) => {
	if (module === require.main) {
		server.listen(port, (err) => {
			if (err) throw err;
			console.log(`Server is running under port ${port}`);
		});
	}
}).catch((ex) => { console.error(ex.stack); process.exit(1) });