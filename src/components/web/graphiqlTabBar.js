import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TabItem from './graphiqlTabItem';
import { Element } from '../../../typeDefinition';

type Props = {
	tabs?: Array<Object>,
	commands?: Element,
};

export default class GraphiQLTabBar extends Component {
	props: Props;

	static defaultProps = {
		tabs: [],
	};

	render() {
		return <View style={styles.tabContainer}>
			<View style={styles.tabItemContainer}>
				{this.props.tabs.map((tab, i) => {
					return <TabItem key={i} {...tab}/>;
				})}
			</View>
			<View style={styles.tabCommandContainer}>
				{this.props.commands}
			</View>
		</View>;
	}
}

const styles = StyleSheet.create({
	tabContainer: {
		flexDirection: 'row',
	},
	tabItemContainer: {
		flex: 1,
		flexDirection: 'row',
	},
	tabCommandContainer: {
		flexDirection: 'row',
	},
});