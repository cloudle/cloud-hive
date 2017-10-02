import 'babel-polyfill';
import React from 'react';
import { render as NativeRender, View, Text, AsyncStorage } from 'react-native';
import { AppContainer } from 'react-hot-loader';

import app from './src';
import { store } from './src/store';
import * as appActions from './src/store/action/app';

const render = (Component) => {
	const rootEl = document.getElementById('root');

	setTimeout(() => {
		NativeRender(
			<AppContainer>
				<Component store={store}/>
			</AppContainer>,
			rootEl
		);
	}, 0);
};

render(app);

if (module.hot) {
	module.hot.accept('./src', () => {
		const nextApp = require('./src').default;
		render(nextApp);

		/* Beautiful workaround:
		 Force update unrelated modules in the next execution loop.*/
		setTimeout(() => store.dispatch(appActions.increaseCounter()), 0);
	});
}