import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Element, Style } from '../../../typeDefinition';

type Props = {

};

export default class PlaygroundIam extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text>PlaygroundIam</Text>
		</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center', justifyContent: 'center',
	},
});