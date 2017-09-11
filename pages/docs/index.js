import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import withRedux from 'next-redux-wrapper';
import Lottie from 'react-lottie';

import AppLayout from '../../src/components/web/layout';
import Sidebar from './sidebar';
import store from '../../src/store';
import * as animationData from '../../src/lottie/pinjump.json';

@withRedux(store, ({ app }) => {
	return {
		counter: app.counter,
	};
})

export default class DocsPage extends Component {
	render() {
		return <AppLayout
			style={styles.layout}
			url={this.props.url}>
			<Sidebar/>
			<View style={styles.contentContainer}>
				<Lottie
					options={{ animationData }}
					height={400} width={400}
					isStopped={false}
					isPaused={false}/>
			</View>
		</AppLayout>;
	}
}

const styles = StyleSheet.create({
	layout: {
		flexDirection: 'row',
	},
	contentContainer: {
		flex: 1,
	},
});