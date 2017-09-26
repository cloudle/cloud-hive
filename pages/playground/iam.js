import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';

import Layout from '../../src/components/web/playgroundLayout';
import Scene from '../../src/scenes/playground/iam';
import store from '../../src/store';

type Props = {
	dispatch?: Function,
	url?: string,
};

@withRedux(store, ({ app }) => ({}))
export default class PlaygroundIAM extends Component {
	props: Props;

	render() {
		return <Layout url={this.props.url}>
			<Scene/>
		</Layout>;
	}
}