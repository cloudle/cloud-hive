import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import TypeSummary from './typeSummary';
import { iStyles, configs, colors } from '../../../utils';
import { Element, Style } from '../../../../typeDefinition';

type Props = {

};

export default class PlaygroundSchema extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<View style={styles.leftPane}>
				{this.renderSummary()}
			</View>
			<View style={styles.centralPane}>
				{this.renderTabs()}
				{this.renderContent()}
			</View>
		</View>;
	}

	renderSummary = () => {
		return <View style={styles.leftPaneContent}>
			<ScrollView contentContainerStyle={styles.leftPaneScrollContainer}>
				{fakeTypes.map((type, i) => {
					return <TypeSummary key={i} {...type}/>;
				})}
			</ScrollView>
		</View>;
	};

	renderTabs = () => {
		return <View style={styles.paneCommands}/>;
	};

	renderContent = () => {
		return <View style={styles.rightPaneContent}/>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, flexDirection: 'row',
		backgroundColor: colors.darkerBackground,
	},
	leftPane: {
		marginLeft: 5, width: configs.paneSize,
	},
	paneCommands: {
		height: configs.topPaneSize,
		backgroundColor: colors.darkerBackground,
		borderBottomWidth: 5, borderColor: colors.lighterBackground,
	},
	leftPaneContent: {
		flex: 1,
		backgroundColor: colors.darkBackground,
		padding: 10, paddingRight: 3,
	},
	leftPaneScrollContainer: {
		marginRight: 20,
	},
	centralPane: {
		flex: 1,
	},
	rightPaneContent: {
		flex: 1,
		backgroundColor: colors.lighterBackground,
	},
});

const fakeTypes = [{
	name: 'Article',
	fields: [
		{ name: 'id', type: 'Int', default: true, required: true, },
		{ name: 'createdAt', type: 'Datetime', default: true, required: true, },
		{ name: 'updatedAt', type: 'Datetime', default: true, required: true, },
		{ name: 'content', type: 'String', },
	],
}, {
	name: 'Project',
	fields: [
		{ name: 'id', type: 'Int', default: true, required: true, },
		{ name: 'createdAt', type: 'Datetime', default: true, required: true, },
		{ name: 'updatedAt', type: 'Datetime', default: true, required: true, },
	],
}, {
	name: 'Product',
	fields: [
		{ name: 'id', type: 'Int', default: true, required: true, },
		{ name: 'createdAt', type: 'Datetime', default: true, required: true, },
		{ name: 'updatedAt', type: 'Datetime', default: true, required: true, },
	],
}, {
	name: 'Comment',
	fields: [
		{ name: 'id', type: 'Int', default: true, required: true, },
		{ name: 'createdAt', type: 'Datetime', default: true, required: true, },
		{ name: 'updatedAt', type: 'Datetime', default: true, required: true, },
	],
}, ];