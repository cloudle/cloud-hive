import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-universal-ui';
import Router from 'next/router';

import Navigation from '../playgroundNavigation';
import ProgressBar from './progressBar';
import * as appActions from '../../store/action/app';
import { iStyles, colors } from '../../utils';
import type { Style, Element } from '../../../typeDefinition';

type Props = {
	dispatch?: Function,
	url?: Object,
	style?: Style,
	children?: Element,
};

@connect(({ app }) => {
	return {
		routeLoaded: app.routeLoaded,
	};
})

export default class AppLayout extends Component {
	props: Props;

	componentWillMount() {
		Router.onRouteChangeStart = (url) => {
			this.props.dispatch(appActions.updateLoadingProgress(0));
		};

		Router.onRouteChangeComplete = () => {
			setTimeout(() => this.props.dispatch(appActions.updateLoadingProgress(1)), 200);
		};

		Router.onRouteChangeError = () => {
			setTimeout(() => this.props.dispatch(appActions.updateLoadingProgress(1)), 200);
		};
	}

	render() {
		return <View style={styles.container}>
			<ProgressBar backgroundColor="#ffffff"/>
			<Navigation
				route={this.props.url}
				onNavigate={route => Router.push(route.link)}/>

			<View style={[styles.contentContainer, this.props.style]}>
				{this.props.children}
			</View>

			<Dropdown/>
		</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		position: 'absolute',
		top: 0, left: 0, right: 0, bottom: 0,
	},
	contentContainer: {
		flex: 1,
	},
});