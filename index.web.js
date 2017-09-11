import 'babel-polyfill';
import React, { Component } from 'react';
import ReactNative, { View, Text, AsyncStorage } from 'react-native';
import { AppContainer } from 'react-hot-loader';

import app from './src/mobileEntry';
import configureStore from './src/store';
import * as appActions from './src/store/action/app';

const store = configureStore();

const render = (AppComponent) => {
	const rootEl = document.getElementById('root');
	setTimeout(() => {
		ReactNative.render(
			<AppContainer>
				<AppComponent store={store}/>
			</AppContainer>,
			rootEl
		);
	}, 0);
};

render(app);

if (module.hot) {
	module.hot.accept('./src/mobileEntry', () => {
		const nextApp = require('./src/mobileEntry').default;
		render(nextApp);

		/* Beautiful workaround:
		 Force update unrelated modules in the next execution loop.*/
		setTimeout(() => store.dispatch(appActions.increaseCounter()), 0);
	});
}