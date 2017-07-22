import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, } from 'react-native';
import withRedux from 'next-redux-wrapper';
import { Button, Input } from 'react-universal-ui';

import Layout from '../../components/playgroundLayout';
import { colors } from '../../utils';
import store from '../../store';
import * as appActions from '../../store/action/app';

type Props = {
	dispatch?: Function,
	counter?: number,
};

@withRedux(store, ({ app }) => {
	return {
		counter: app.counter,
	};
})

export default class PlaygroundSchema extends Component {
	render() {
		return <Layout url={this.props.url} style={styles.container}>
			<Text>Playground Schema</Text>
		</Layout>;
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center', alignContent: 'center',
	},
});