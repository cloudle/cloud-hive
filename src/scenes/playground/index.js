import React, { Component } from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';

import Navigation from '../../components/playgroundNavigation';
import DashboardScene from './dashboard';
import IamScene from './iam';
import BillScene from './bill';
import SchemaScene from './schema';
import DataScene from './data';

export default class Playground extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sceneComponent: getSceneComponent({}),
			activeRoute: {},
		};
	}

	componentWillMount() {
		StatusBar.setHidden(true);
	}

	componentWillUnmount() {
		StatusBar.setHidden(false);
	}

	render() {
		const Scene = this.state.sceneComponent;

		return <View style={styles.container}>
			<Navigation route={this.state.activeRoute} onNavigate={this.navigateScene}/>
			<View style={styles.contentContainer}>
				<Scene/>
			</View>
		</View>;
	}

	navigateScene = (route) => {
		this.setState({
			sceneComponent: getSceneComponent(route),
			activeRoute: route,
		});
	};
}

function getSceneComponent(route) {
	switch (route.scene) {
	case 'iam':
		return IamScene;
	case 'bill':
		return BillScene;
	case 'schema':
		return SchemaScene;
	case 'data':
		return DataScene;
	default:
		return DashboardScene;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, flexDirection: 'row',
	},
	contentContainer: {
		flex: 1,
	},
});