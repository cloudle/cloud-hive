import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Router from 'next/router';

import NavigationItems from './navigationItems';
import { colors, iStyles } from '../utils/index';

type Props = {
	url?: Object,
};

export default class Navigation extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<View style={[iStyles.contentContainer, styles.contentContainer]}>
				{this.renderLogo()}
				<NavigationItems url={this.props.url}/>
			</View>
		</View>;
	}

	renderLogo() {
		return <TouchableOpacity
			onPress={() => Router.push('/')}>
			<Text style={styles.text}>UNIVERSAL UI</Text>
		</TouchableOpacity>;
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.main,
		paddingTop: 8,
		paddingLeft: 10, paddingRight: 10,
	},
	contentContainer: {
		flexDirection: 'row', alignItems: 'center',
	},
	text: {
		color: '#ffffff',
	},
});