import { createStore, compose, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducers from './reducers';

const DEVTOOLS = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
	composeEnhancers = global[DEVTOOLS] || compose;

export default function configureStore(initialState) {
	const enhancers = composeEnhancers(
		// applyMiddleware(logger)
	);

	const store = initialState
		? createStore(reducers, initialState, enhancers)
		: createStore(reducers, enhancers);

	if (module.hot) {
		module.hot.accept('./reducers', () => {
			const nextRootReducer = require('./reducers').default; // eslint-disable-line global-require
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}

export const store = configureStore();