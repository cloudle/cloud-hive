import React, { Component } from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';

import Navigation from './playgroundNavigation';
import { Element, Style } from '../../typeDefinition';

type Props = {
	wrapperStyle?: Style,
	children?: Element,
	url: Object,
};

export default class PlaygroundLayout extends Component {
	props: Props;

	componentWillMount() {
		StatusBar.setHidden(true);
	}

	componentWillUnmount() {
		StatusBar.setHidden(false);
	}

	render() {
		return <View style={[styles.container, this.props.wrapperStyle]}>
			<Navigation url={this.props.url}/>
			<View style={styles.contentContainer}>
				{this.props.children}
			</View>
		</View>;
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