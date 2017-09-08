import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-universal-ui';
import fetch from 'isomorphic-fetch';

import GraphiQL from './graphiql-src';
import TabBar from './graphiqlTabBar';
import { colors, apiEndpoint, getIdToken } from '../utils';

const isServer = typeof window === 'undefined';
// const defaultEndpoint = isServer ? '' : `${document.location.origin}/api`;
const defaultEndpoint = isServer ? '' : apiEndpoint;

export default class GraphWorkspace extends Component {
	constructor(props) {
		super(props);
		this.state = {
			urlVisible: false,
			urlInput: defaultEndpoint,
			url: defaultEndpoint,
		};
	}

	componentDidMount() {
		const url = localStorage.getItem('apiUrl');
		url && this.updateEndpoint(url);
	}

	render() {
		const visibleUrlStyle = this.state.urlVisible ? {
				backgroundColor: '#999999',
			} : {},
			graphQLFetcher = (graphQLParams) => {
				return new Promise((resolve, reject) => {
					getIdToken().then((token) => {
						const headers = { Accept: 'application/json', 'Content-Type': 'application/json', };
						if (token) headers.token = token;

						fetch(this.state.url, {
							method: 'POST',
							headers,
							body: JSON.stringify(graphQLParams),
						}).then(response => resolve(response.json()))
							.catch(error => reject(error));
					}).catch(error => reject(error));
				});
			},
			commands = <Button
				onPress={() => this.setState({ urlVisible: !this.state.urlVisible })}
				wrapperStyle={[{ margin: 8, backgroundColor: colors.secondary }, visibleUrlStyle]}
				innerStyle={{ padding: 4, paddingLeft: 8, paddingRight: 8 }}
				title="url"/>;

		return <View style={styles.container}>
			<View style={styles.headingContainer}>
				<TabBar tabs={fakeTabs}/>
				{/*{this.renderUrl()}*/}
			</View>
			<GraphiQL fetcher={graphQLFetcher}/>
		</View>;
	}

	renderUrl() {
		if (this.state.urlVisible) {
			return <View style={styles.urlContainer}>
				<Input
					wrapperStyle={styles.urlWrapper}
					floatingLabel="GraphQL endpoint"
					value={this.state.urlInput}
					onChangeText={this.urlChange}
					onBlur={this.updateEndpoint}/>
			</View>;
		} else {
			return <View/>;
		}
	}

	urlChange = (next) => {
		this.setState({ urlInput: next });
	};

	updateEndpoint = (endpoint) => {
		const newEndpoint = endpoint || this.state.urlInput;
		localStorage.setItem('apiUrl', newEndpoint);
		this.setState({ url: newEndpoint });
	};
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute', top: 0, right: 0, left: 0, bottom: 0,
		backgroundColor: colors.darkerBackground,
		paddingLeft: 6,
	},
	headingContainer: {

	},
	urlContainer: {
		paddingTop: 10,
		backgroundColor: '#ffffff',
	},
	urlWrapper: {
		paddingLeft: 18, paddingRight: 18,
	},
});

const fakeTabs = [{
	title: 'QUERY 1',
	active: true,
}, {
	title: 'QUERY 2',
}, {
	title: 'QUERY 3',
}, ];