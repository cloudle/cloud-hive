import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class WelcomeScene extends Component {
	render() {
		return <View style={styles.container}>
			<Text>WelcomeScene</Text>
		</View>;
	}
}

const styles = StyleSheet.create({
	container: {

	},
});