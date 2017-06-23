import { GraphQLString as String } from 'graphql';

export const greeting = {
	type: String,
	resolve(root, args, ast) {
		return 'Hello, Stranger!';
	},
};