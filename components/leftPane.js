import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from './vector-icons/MaterialIcons';

import { configs, colors } from '../utils';

type Props = {
	url?: Object,
};

export default class NavigationComponent extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			{menuItems.map((menu, i) => {
				return <MenuItem
					key={i}
					menu={menu}
					pathname={this.props.url.pathname}
					onPress={this.navigatePage}/>;
			})}
		</View>;
	}

	navigatePage = (route) => {
		// this.props.dispatch(push(route.path));
	}
}

type MenuItemProps = {
	menu: Object,
	pathname: string,
	onPress: Function,
};

function MenuItem({ menu, pathname, onPress }: MenuItemProps) {
	const activeStyle = pathname === menu.path ?
		{ backgroundColor: colors.darken(colors.darkBackground, 0) } : {};

	return <TouchableOpacity
		style={[styles.menuItemWrapper, activeStyle]}
		onPress={() => onPress(menu)}>
		<Icon name={menu.icon} style={styles.menuIcon}/>
	</TouchableOpacity>;
}

const styles = StyleSheet.create({
	container: {
		width: configs.navigationWidth,
		backgroundColor: colors.darken(colors.darkBackground, 5),
		paddingTop: 62,
	},
	menuItemWrapper: {
		alignItems: 'center', justifyContent: 'center',
		height: configs.navigationWidth,
		backgroundColor: colors.darken(colors.darkBackground, 2),
	},
	menuIcon: {
		color: '#ffffff',
		fontSize: 22,
	},
});

const menuItems = [{
	icon: 'donut-large',
	path: '/schema',
}, {
	icon: 'fingerprint',
	path: '/data',
}, {
	icon: 'verified-user',
	path: '/permission',
}, {
	icon: 'play-circle-outline',
	path: '/playground',
}, ];