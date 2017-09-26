import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-universal-ui';

import * as appActions from '../../store/action/app';
import { Element, Style } from '../../../typeDefinition';

type Props = {
	dispatch?: Function,
	counter?: number,
};

@connect(({ app }) => {
	return {
		counter: app.counter,
	};
})

export default class PlaygroundDashboard extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text>Playground Dashboard {this.props.counter}</Text>
			<Button
				title="increase"
				wrapperStyle={{ marginTop: 10, }}
				onPress={() => this.props.dispatch(appActions.increaseCounter())}/>
		</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center', justifyContent: 'center',
	},
});