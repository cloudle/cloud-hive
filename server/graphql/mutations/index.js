import { GraphQLInt as Int, GraphQLObjectType } from 'graphql';
import { increaseCounter as increase } from '../queries/counter';

export const increaseCounter = {
	type: Int,
	resolve(root, args, ast) {
		return increase();
	}
};

export default new GraphQLObjectType({
	name: 'Mutations',
	fields: {
		increaseCounter,
	},
});