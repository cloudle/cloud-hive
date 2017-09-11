import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import withRedux from 'next-redux-wrapper';

import AppLayout from '../../src/components/web/layout';
import store from '../../src/store';

type Props = {
	url?: string,
};

@withRedux(store, ({ app }) => {
	return {
		counter: app.counter,
		userProfile: app.userProfile,
	};
})

export default class PlatformsPage extends Component {
	props: Props;

	render() {
		return <AppLayout url={this.props.url}>
			<Text>PlatformsPage</Text>
		</AppLayout>;
	}
}

const styles = StyleSheet.create({

});