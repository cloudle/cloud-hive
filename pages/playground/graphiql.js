import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';

import Layout from '../../src/components/web/playgroundLayout';
import Scene from '../../src/components/web/graphiql';
import store from '../../src/store';

type Props = {
	dispatch?: Function,
	url?: Object,
};

@withRedux(store, ({ app }) => ({}))
export default class PlaygroundGraphiQL extends Component {
	props: Props;

	render() {
		return <Layout url={this.props.url}>
			<Scene/>
		</Layout>;
	}
}