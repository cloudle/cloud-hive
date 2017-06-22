import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DocSidebar extends Component {
	render() {
		return <View style={styles.container}>
			<Text>DocSidebar</Text>
		</View>;
	}
}

const styles = StyleSheet.create({
  container: {
  	backgroundColor: 'red',
	},
});