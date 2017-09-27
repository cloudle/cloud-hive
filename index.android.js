import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
// import App from './src';
// import configureStore from './src/store';

// const store = configureStore();
function appWithStore() {
	return <View>
		<Text>Hi</Text>
	</View>;
}

AppRegistry.registerComponent('app', () => appWithStore);