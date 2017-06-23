import { GraphQLObjectType } from 'graphql';

import { greeting } from './greeting';
import { counter } from './counter';

export default new GraphQLObjectType({
	name: 'Queries',
	fields: () => ({
		greeting,
		counter,
	})
});