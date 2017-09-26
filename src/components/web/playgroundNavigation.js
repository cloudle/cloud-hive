import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Router from 'next/router';

import { ResponsibleTouchArea, DropdownContainer } from 'react-universal-ui';
import Icon from './vector-icons/MaterialIcons';
import { configs, colors } from '../../utils';

type Props = {
	url?: Object,
};

export default class PlaygroundNavigation extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<View style={styles.navContainer}>
				<TouchableOpacity
					style={styles.homeItemWrapper}
					onPress={() => Router.push('/')}>
					<Icon name="home" style={styles.menuIcon}/>
				</TouchableOpacity>

				{menuItems.map((menu, i) => {
					return <MenuItem
						key={i}
						menu={menu}
						pathname={this.props.url.pathname}
						onPress={route => Router.push(route.link)}/>;
				})}
			</View>
			<View style={styles.sysContainer}>
				<DropdownContainer
					style={{ alignItems: 'center', justifyContent: 'center', height: 50, }}
					dropdownWrapperStyle={{  }}
					dropdownDirection="right">
					<View
						style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 18, width: 36, height: 36 }}/>
				</DropdownContainer>
			</View>
		</View>;
	}
}

type MenuItemProps = {
	menu: Object,
	pathname: string,
	onPress: Function,
};

function MenuItem({ menu, pathname, onPress }: MenuItemProps) {
	const activeStyle = pathname === menu.link ?
		{ backgroundColor: colors.lighten(colors.darkBackground, 5) } : {};

	return <ResponsibleTouchArea
		wrapperStyle={[styles.menuItemWrapper, activeStyle]}
		innerStyle={styles.menuItemInner}
		tooltip={menu.tooltip}
		fade ripple={false}
		minActiveOpacity={0.5}
		tooltipDirection="right"
		onPress={() => onPress(menu)}>
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
	icon: 'assignment-ind',
	link: '/playground/iam',
	tooltip: 'iam',
}, {
	icon: 'card-membership',
	link: '/playground/bill',
	tooltip: 'billing',
}, {
	icon: 'fingerprint',
	link: '/playground/schema',
	tooltip: 'schema',
}, {
	icon: 'graphic-eq',
	link: '/playground/data',
	tooltip: 'data',
}, {
	icon: 'play-circle-outline',
	link: '/playground',
	tooltip: 'playground',
}, ];