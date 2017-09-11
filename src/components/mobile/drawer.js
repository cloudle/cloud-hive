import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {

};

export default class DrawerPane extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text>DrawerPane</Text>
		</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, backgroundColor: '#ffffff',
	},
});