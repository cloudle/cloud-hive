import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Router from 'next/router';

import { colors, iStyles } from '../../utils/index';

type Props = {
	url?: Object,
};

export default class Navigation extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<View style={[iStyles.contentContainer, styles.contentContainer]}>
				{this.renderLogo()}
				{this.renderMenus()}
			</View>
		</View>;
	}

	renderLogo() {
		return <TouchableOpacity
			onPress={() => Router.push('/')}>
			<Text style={styles.text}>UNIVERSAL UI</Text>
		</TouchableOpacity>;
	}

	renderMenus() {
		return <View style={styles.menuContainer}>
			{menus.map((menu, i) => {
				const active = this.props.url && this.props.url.pathname === menu.link,
					activeWrapperStyle = active ? { backgroundColor: 'rgba(255, 255, 255, 0.1)', } : {},
					activeTextStyle = active ? { color: '#ffffff', } : {};

				return <TouchableOpacity
					activeOpacity={0.2} key={i}
					style={[styles.menuItemWrapper, activeWrapperStyle]}
					onPress={() => Router.push(menu.link)}>
					<Text style={[styles.menuText, activeTextStyle]}>{menu.title}</Text>
				</TouchableOpacity>})}
		</View>;
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
	menuContainer: {
		flexDirection: 'row',
		flex: 1,
	},
	menuItemWrapper: {
		padding: 12, paddingTop: 9, paddingBottom: 9,
		margin: 12, marginLeft: 8, marginRight: 8,
		borderRadius: 4,
	},
	menuText: {
		color: 'rgba(255, 255, 255, 0.6)',
		fontSize: 11,
		fontWeight: '500',
	},
});

const menus = [{
	title: 'PLATFORMS',
	link: '/platforms',
	active: true,
}, {
	title: 'SHOWCASES',
	link: '/showcases',
}, {
	title: 'DOCS',
	link: '/docs',
}, {
	title: 'SUPPORT',
	link: '/support',
},  {
	title: 'ECOSYSTEM',
	link: '/ecosystem',
}, ];