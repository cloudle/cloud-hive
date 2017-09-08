import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import withRedux from 'next-redux-wrapper';

import AppLayout from '../../components/layout';
import store from '../../store';

@withRedux(store, ({ app }) => {
	return {
		counter: app.counter,
		userProfile: app.userProfile,
	};
})

export default class PlatformsPage extends Component {
	render() {
		return <AppLayout url={this.props.url}>
			<Text>PlatformsPage</Text>
		</AppLayout>;
	}
}

const styles = StyleSheet.create({

});