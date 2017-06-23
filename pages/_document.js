import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static getInitialProps ({ renderPage }) {
		const {html, head, errorHtml, chunks} = renderPage();
		return { html, head, errorHtml, chunks };
	}

	componentDidMount() {

	}

	render () {
		return <html>
			<Head>
				<link rel="stylesheet" href="/static/main.css" />
				<link rel="stylesheet" href="/static/graphiqlStyle.css" />

				<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
				<meta name="format-detection" content="telephone=no"/>
				<meta name="msapplication-tap-highlight" content="no"/>
			</Head>

			<body>
				<Main/>
				<NextScript/>
			</body>
		</html>
	}
}