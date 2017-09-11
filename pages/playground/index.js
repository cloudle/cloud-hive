import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, } from 'react-native';
import withRedux from 'next-redux-wrapper';
import { Button, Input } from 'react-universal-ui';

import Layout from '../../src/components/web/playgroundLayout';
import GraphiQL from '../../src/components/web/graphiql';
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

export default class PlaygroundPage extends Component {
	render() {
		return <Layout url={this.props.url}>
			<GraphiQL/>
		</Layout>;
	}
}

const styles = StyleSheet.create({

});