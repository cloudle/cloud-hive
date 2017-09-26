import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import PlaygroundLayout from '../../components/playgroundLayout';
import DashboardScene from './dashboard';
import IamScene from './iam';
import BillScene from './bill';
import SchemaScene from './schema';
import DataScene from './data';

export default class Playground extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sceneComponent: getSceneComponent(),
		};
	}

	render() {
		const Scene = this.state.sceneComponent;

		return <PlaygroundLayout onNavigate={this.navigateScene}>
			<Scene/>
		</PlaygroundLayout>;
	}

	navigateScene = (route) => {
		this.setState({ });
	};
}

function getSceneComponent(sceneKey) {
	switch (sceneKey) {
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

	},
});