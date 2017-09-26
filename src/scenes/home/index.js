import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { Button, routeAction } from 'react-universal-ui';

type Props = {
	dispatch?: Function,
	counter?: number,
};

@connect(({ app }) => {
	return {
		counter: app.counter,
	};
})

export default class HomeScene extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text>HomeScene!! {this.props.counter}</Text>
			<Button title="Welcome" onPress={() => this.props.dispatch(routeAction.push('welcome'))}/>
		</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, alignItems: 'center', justifyContent: 'center',
	},
});