import { graphql } from 'graphql';
import schema from '../graphql';

export function executeGQL(query, variables = {}, rootValues = {}) {
	/* schema, query, root, ctx, variables*/
	return graphql(schema, query, rootValues, {}, variables);
}