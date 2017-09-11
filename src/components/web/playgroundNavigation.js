import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Router from 'next/router';

import Icon from './vector-icons/MaterialIcons';
import { configs, colors } from '../../utils';

type Props = {
	url?: Object,
};

export default class PlaygroundNavigation extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<TouchableOpacity
				style={styles.homeItemWrapper}
				onPress={() => Router.push('/')}>
				<Icon name='home' style={styles.menuIcon}/>
			</TouchableOpacity>

			{menuItems.map((menu, i) => {
				return <MenuItem
					key={i}
					menu={menu}
					pathname={this.props.url.pathname}
					onPress={route => Router.push(route.link)}/>;
			})}
		</View>;
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
	},
	menuItemWrapper: {
		alignItems: 'center', justifyContent: 'center',
		height: configs.navigationWidth,
		backgroundColor: colors.darken(colors.darkBackground, 2),
	},
	homeItemWrapper: {
		alignItems: 'center', justifyContent: 'flex-end',
		height: configs.navigationWidth,
		marginTop: 3, paddingBottom: 10,
	},
	menuIcon: {
		color: '#ffffff',
		fontSize: 22,
	},
});

const menuItems = [{
	icon: 'assignment-ind',
	link: '/playground/iam',
}, {
	icon: 'card-membership',
	link: '/playground/bill',
},  {
	icon: 'queue-play-next',
	link: '/playground/project',
}, {
	icon: 'fingerprint',
	link: '/playground/schema',
}, {
	icon: 'graphic-eq',
	link: '/playground/data',
}, {
	icon: 'play-circle-outline',
	link: '/playground',
}, ];