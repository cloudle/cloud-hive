import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, } from 'react-native';
import withRedux from 'next-redux-wrapper';
import { Button, Input } from 'react-universal-ui';

import Layout from '../../src/components/web/playgroundLayout';
import { colors } from '../../src/utils';
import store from '../../src/store';
import * as appActions from '../../src/store/action/app';

type Props = {
	dispatch?: Function,
	counter?: number,
};

@withRedux(store, ({ app }) => {
	return {
		counter: app.counter,
	};
})

export default class PlaygroundBill extends Component {
	props: Props;

	render() {
		return <Layout url={this.props.url} style={styles.container}>
			<Text>Playground Bill</Text>
		</Layout>;
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center', alignContent: 'center',
	},
});