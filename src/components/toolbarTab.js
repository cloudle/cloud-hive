import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from './vector-icons/MaterialIcons';

import { colors } from '../utils';
import type { Style, Element, } from '../../typeDefinition';

type Props = {
	wrapperStyle?: Style,
	textStyle?: Style,
	iconStyle?: Style,
	icon?: String,
	title?: String,
	radius?: number,
	onPress?: Function,
	activeOpacity?: number,
};

export default class ToolbarTab extends Component {
	props: Props;

	static defaultProps = {
		title: 'Untitled',
		radius: 3,
		activeOpacity: 0.75,
	};

	render() {
		const containerStyle = {
			borderTopLeftRadius: this.props.radius,
			borderTopRightRadius: this.props.radius,
			...this.props.wrapperStyle,
		};

		return <TouchableOpacity
			style={[styles.container, containerStyle]}
			activeOpacity={this.props.activeOpacity}
			onPress={this.props.onPress}>

			{this.props.icon && <View style={styles.iconContainer}>
				<Icon
					name={this.props.icon}
					style={[styles.icon, this.props.textStyle, this.props.iconStyle]}/>
			</View>}

			<View style={styles.titleContainer}>
				<Text style={[styles.title, this.props.textStyle]}>{this.props.title}</Text>
			</View>
		</TouchableOpacity>;
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row', height: 44,
		marginRight: 8, paddingHorizontal: 22,
		backgroundColor: colors.darkBackground,
	},
	iconContainer: {
		marginRight: 8, justifyContent: 'center',
	},
	icon: {
		color: '#c0c0c0', fontSize: 20,
	},
	titleContainer: {
		justifyContent: 'center',
	},
	title: {
		color: '#c0c0c0',
	},
});