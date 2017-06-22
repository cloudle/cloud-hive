import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, } from 'react-native';
import withRedux from 'next-redux-wrapper';
import { Button, Input } from 'react-universal-ui';

import Markdown from '../components/markdown';
import Layout from '../components/layout';
import Greeting from '../components/greeting';
import { colors } from '../utils';
import store from '../store';
import * as appActions from '../store/action/app';

type Props = {
	dispatch?: Function,
	counter?: number,
};

@withRedux(store, ({ app }) => {
	return {
		counter: app.counter,
	};
})

export default class IndexPage extends Component {
	props: Props;

	render() {
		return <Layout>
			<Markdown
				styles={markdownStyles}
				rules={{
					inlineCode: {
						react: (node, output, state) => {
							console.log(node, output, state);
							return <Text
								key={state.key}
								style={{ backgroundColor: 'red', borderRadius: 3, }}>
								This is inlineCode!!
							</Text>;
						}
					},
				}}>
				# React **Universal** UI {'\n'}
				```
				console.log('hello world')
				```
			</Markdown>
		</Layout>;
	}
}

const markdownStyles = {
	heading1: {
		fontSize: 24,
	},
	heading2: {
		fontSize: 22,
	},
	link: {
		color: 'pink',
	},
	mailTo: {
		color: 'orange',
	},
	text: {
		color: '#555555',
	},
};

const styles = StyleSheet.create({
	container: {
		position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
		justifyContent: 'center', alignItems: 'center',
	},
});