import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/mobileEntry';
import configureStore from './src/store';

const store = configureStore();
function appWithStore() {
	return <App store={store}/>;
}

AppRegistry.registerComponent('app', () => appWithStore);