import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from '../vector-icons/FontAwesome';

import { colors } from '../../utils';

type Props = {
	active?: boolean,
	title?: string,
};

export default class TabItem extends Component {
	props: Props;

	static defaultProps = {
		title: 'Untitled',
	};

	render() {
		const activeContainerStyle = this.props.active
				? { backgroundColor: colors.lighterBackground } : {},
			activeTextStyle = this.props.active
				? { color: '#ffffff' } : {};

		return <View
			className="touchable"
			style={[styles.container, activeContainerStyle]}>
			<View style={styles.titleContainer}>
				<Text style={[styles.title, activeTextStyle]}>
					{this.props.title}
				</Text>
			</View>
			<View style={styles.iconContainer}>
				<TouchableOpacity style={styles.iconWrapper}>
					<Icon name="times" color="#666666" size={14} style={{ left: -1 }}/>
				</TouchableOpacity>
			</View>
		</View>;
	}
}

export const tabRadius = 2,
	inActiveTabBackground = colors.lighten(colors.darkBackground, 4);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingLeft: 18,
		marginLeft: 8, marginTop: 15,
		backgroundColor: inActiveTabBackground,
		borderTopRightRadius: tabRadius, borderTopLeftRadius: tabRadius,
	},
	titleContainer: {
		justifyContent: 'center',
	},
	title: {
		color: '#a0a0a0', fontSize: 15,
		fontWeight: '200',
	},
	iconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	iconWrapper: {
		padding: 9, paddingLeft: 10,
	},
});