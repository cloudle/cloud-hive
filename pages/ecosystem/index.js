import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import withRedux from 'next-redux-wrapper';

import AppLayout from '../../src/components/web/layout';
import store from '../../src/store';

@withRedux(store, ({ app }) => {
	return {
		counter: app.counter,
	};
})

export default class EcosystemPage extends Component {
	render() {
		return <AppLayout url={this.props.url}>
			<Text>EcosystemPage</Text>
		</AppLayout>;
	}
}

const styles = StyleSheet.create({

});