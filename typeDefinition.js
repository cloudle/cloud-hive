import React from 'react';

export type Action = {
	action: String,
}

export type Element = React.Element<*>;

export type Style =
	| { [key: string]: any }
	| number
	| false
	| null
	| void
	| Array<Style>;

export type LayoutEvent = {
	nativeEvent: {
		layout: {
			x: number,
			y: number,
			width: number,
			height: number,
		},
	},
};

export type SchemaField = {
	name?: String,
	required?: boolean,
};

export type SchemaType = {
	name?: String,
	fields?: Array<SchemaField>,
	wrapperStyle?: Style,
};