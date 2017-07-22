import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Datastore from '@google-cloud/datastore';

import { executeGQL } from './utils';

const router = express.Router();
const datastore = Datastore();

router.use('/api', cors(), bodyParser.json(), (req, res) => {
	const { query, variables } = req.body,
		clientId = req.get('clientId');

	// listMarkdowns()
	// 	.then(markdowns => console.log(markdowns))
	// 	.catch(error => console.log(error));

	return executeGQL(query, variables, { clientId, })
		.then(result => res.json(result))
		.catch(error => res.json(error));
});

function createMarkDown(content) {
	const markdownKey = datastore.key('Markdown');
	const entity = {
		key: markdownKey,
		data: [{
			name: 'created',
			value: new Date().toJSON(),
		}, {
			name: 'content',
			value: content,
			excludeFromIndexes: true,
		}, {
			name: 'published',
			value: false,
		}],
	};

	return datastore.save(entity)
		.then(() => {
			console.log(`Markdown ${markdownKey.id} created successfully.`);
			return markdownKey;
		});
}

function publishMarkdown(markdownId) {
	const transaction = datastore.transaction();
	const markdownKey = datastore.key(['Markdown', markdownId]);

	return transaction.run()
		.then(() => transaction.get(markdownKey))
		.then((results) => {
			const markdown = results[0];
			markdown.publish = true;
			transaction.save({
				key: markdownKey,
				data: markdown,
			});
			return transaction.commit();
		}).then(() => {
			console.log(`Markdown ${markdownId} updated successfully.`);
		}).catch(() => transaction.rollback());
}

function deleteMarkdown(markdownId) {
	const markdownKey = datastore.key(['Markdown', markdownId]);

	return datastore.delete(markdownKey)
		.then(() => console.log(`Markdown ${markdownId} deleted successfully.`));
}

function listMarkdowns() {
	const query = datastore.createQuery('Markdown')
		.order('created');
	return datastore.runQuery(query).then(results => results[0]);
}

module.exports = router;