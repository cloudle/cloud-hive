import React, { Component } from 'react';
import { View, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';

import TypeSummary from './typeSummary';
import ToolbarTab from '../../../components/toolbarTab';
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
				<TouchableOpacity style={{
					backgroundColor: colors.secondary, borderRadius: 3,
					padding: 12, marginTop: 3, marginBottom: 14, }}>
					<Text style={{ color: '#ffffff', }}>ADD NEW TYPE</Text>
				</TouchableOpacity>

				{fakeTypes.map((type, i) => {
					return <TypeSummary key={i} {...type}/>;
				})}
			</ScrollView>
		</View>;
	};

	renderTabs = () => {
		return <View style={styles.paneCommands}>
			<ToolbarTab
				icon="style"
				title="TYPES"
				wrapperStyle={{ backgroundColor: colors.lighterBackground }}
				textStyle={{ color: '#ffffff', }}
				iconStyle={{ color: colors.secondary }}/>
			<ToolbarTab
				icon="filter-tilt-shift"
				title="INTERFACES"/>
			<ToolbarTab
				icon="hdr-strong"
				title="ENUMS"/>
		</View>;
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
		flexDirection: 'row', alignItems: 'flex-end',
		height: configs.topPaneSize,
		paddingHorizontal: 18,
		backgroundColor: colors.darkerBackground,
		borderBottomWidth: 5, borderColor: colors.lighterBackground,
	},
	leftPaneContent: {
		flex: 1,
		backgroundColor: colors.darkBackground,
		paddingLeft: 10, paddingRight: 3,
	},
	leftPaneScrollContainer: {
		marginVertical: 8, marginRight: 20,
	},
	centralPane: {
		flex: 1,
	},
	rightPaneContent: {
		flex: 1,
		backgroundColor: 'rgba(255, 255, 255, 0.08)',
		// backgroundColor: colors.lighterBackground,
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