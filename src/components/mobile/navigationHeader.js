import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationHeader, routeAction, utils } from 'react-universal-ui';

import { colors } from '../../utils';
import NavigationBackButton from './navigationBackButton';

type Props = {
	dispatch?: Function,
};

@connect(({ app }) => {
	return {

	};
})

export default class Header extends Component {
	props: Props;

	render() {
		return <NavigationHeader
			{...this.props}
			style={styles.navigationContainer}
			renderTitleComponent={this.renderTitleComponent}
			renderLeftComponent={this.renderLeftComponent}
			renderRightComponent={this.renderRightComponent}/>;
	}

	renderTitleComponent = (props) => {
		return <NavigationHeader.Title
				textStyle={styles.navigationTitle}>
			{props.scene.route.title}
		</NavigationHeader.Title>;
	};

	renderLeftComponent = (props) => {
		return props.scene.index === 0 ?
			null : <NavigationBackButton onPress={this.onNavigateBack}/>;
	};

	renderRightComponent = (props) => {
		const activeRoute = props.scene.route,
			rightButtons = activeRoute.component.renderRightButtons;

		return <View>
			{rightButtons && rightButtons()}
		</View>;
	};

	onNavigateBack = () => {
		this.props.dispatch(routeAction.pop());
	}
}

const styles = StyleSheet.create({
	navigationContainer: {
		height: 88,
		position: 'absolute', top: 0, left: 0, right: 0,
		backgroundColor: colors.main,
		borderBottomColor: colors.main,
		borderTopWidth: 22, borderTopColor: colors.darkerMain,
	},
	navigationTitle: {
		color: 'white',
		fontWeight: '300',
	}
});