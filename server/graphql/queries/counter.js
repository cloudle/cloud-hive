import { GraphQLInt as Int } from 'graphql';

let counterState = 0;

export const counter = {
	type: Int,
	resolve(root, args, ast) {
		return counterState;
	}
};

export function increaseCounter() {
	return (counterState += 1);
}