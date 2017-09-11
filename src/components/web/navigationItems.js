import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Router from 'next/router';
import { connect } from 'react-redux';

import { colors, iStyles, login, logout } from '../../utils';

type Props = {
	url?: Object,
	userProfile?: Object,
	menuWrapperStyle?: any,
};

@connect(({ app }) => {
	return {
		userProfile: app.userProfile,
	};
})

export default class extends Component {
	render() {
		return <View style={styles.menuContainer}>
			{menus.map((menu, i) => {
				const active = this.props.url && this.props.url.pathname === menu.link,
					activeWrapperStyle = active ? { backgroundColor: 'rgba(255, 255, 255, 0.1)', } : {},
					activeTextStyle = active ? { color: '#ffffff', } : {};

				return <TouchableOpacity
					activeOpacity={0.2} key={i}
					style={[styles.menuItemWrapper, this.props.menuWrapperStyle, activeWrapperStyle]}
					onPress={() => Router.push(menu.link)}>
					<Text style={[styles.menuText, activeTextStyle]}>{menu.title}</Text>
				</TouchableOpacity>})}

			{this.renderAuthCommands()}
		</View>;
	}

	renderAuthCommands() {
		return this.props.userProfile.uid ? <TouchableOpacity
			style={styles.menuItemWrapper}
			onPress={() => logout()}>
			<Text style={styles.menuText}>{this.props.userProfile.displayName} | LOGOUT</Text>
		</TouchableOpacity> : <TouchableOpacity
			style={styles.menuItemWrapper}
			onPress={() => login()}>
			<Text style={styles.menuText}>LOGIN</Text>
		</TouchableOpacity>;
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