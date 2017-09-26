import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ResponsibleTouchArea, utils as rUtils } from 'react-universal-ui';
import Icon from './vector-icons/MaterialIcons';

import { colors, configs } from '../utils';

type Props = {
	url?: Object,
	onNavigate?: Function,
};

export default class PlaygroundNavigation extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<View style={styles.navContainer}>
				<TouchableOpacity
					style={styles.homeItemWrapper}
					onPress={() => this.props.onNavigate && this.props.onNavigate({ link: '/' })}>
					<Icon name="home" style={styles.menuIcon}/>
				</TouchableOpacity>

				{menuItems.filter(item => (rUtils.isBrowser ? true : !item.browserOnly)).map((menu, i) => {
					return <MenuItem
						key={i}
						menu={menu}
						pathname={this.props.url.pathname}
						onPress={route => this.props.onNavigate && this.props.onNavigate(route)}/>;
				})}
			</View>
		</View>;
	}
}

type MenuItemProps = {
	menu?: Object,
	pathname?: string,
	onPress?: Function,
};

export function MenuItem({ menu, pathname, onPress }: MenuItemProps) {
	const activeStyle = pathname === menu.link ?
		{ backgroundColor: colors.lighten(colors.darkBackground, 5) } : {};

	return <ResponsibleTouchArea
		wrapperStyle={[styles.menuItemWrapper, activeStyle]}
		innerStyle={styles.menuItemInner}
		tooltip={menu.tooltip}
		fade ripple={false}
		minActiveOpacity={0.5}
		tooltipDirection="right"
		onPress={() => onPress && onPress(menu)}>
		<Icon name={menu.icon} style={styles.menuIcon}/>
	</ResponsibleTouchArea>;
}

const styles = StyleSheet.create({
	container: {
		width: configs.navigationWidth,
		backgroundColor: colors.darken(colors.darkBackground, 5),
	},
	navContainer: {
		flex: 1,
	},
	sysContainer: {
		marginBottom: 15,
	},
	menuItemWrapper: {
		backgroundColor: colors.darken(colors.darkBackground, 2),
		borderRadius: 0,
	},
	menuItemInner: {
		paddingVertical: 12, alignItems: 'center',
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
	icon: 'lightbulb-outline',
	link: '/playground',
	scene: 'dashboard',
	tooltip: 'dashboard',
}, {
	icon: 'assignment-ind',
	link: '/playground/iam',
	scene: 'iam',
	tooltip: 'iam',
}, {
	icon: 'card-membership',
	link: '/playground/bill',
	scene: 'bill',
	tooltip: 'billing',
}, {
	icon: 'fingerprint',
	link: '/playground/schema',
	scene: 'schema',
	tooltip: 'schema',
}, {
	icon: 'graphic-eq',
	link: '/playground/data',
	scene: 'data',
	tooltip: 'data',
}, {
	icon: 'play-circle-outline',
	link: '/playground/graphiql',
	scene: 'home',
	tooltip: 'graphiql',
	browserOnly: true,
} ];