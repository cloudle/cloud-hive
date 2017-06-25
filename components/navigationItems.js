import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Router from 'next/router';

import { colors, iStyles } from '../utils/index';

type Props = {
	url?: Object,
};

export default class extends Component {
	render() {
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
}, {
	title: 'PLAYGROUND',
	link: '/playground',
}];