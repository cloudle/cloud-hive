import fetch from 'isomorphic-fetch';
import { getIdToken } from './firebase';

export const apiEndpoint = 'http://localhost:8080/api';
const graphQLFetch = factory(apiEndpoint);

export function query(graphQLQuery, vars = {}, graphOpts = {}) {
	return new Promise((resolve, reject) => {
		graphQLFetch(graphQLQuery, vars, graphOpts).then((result) => {
			if (result.errors) {
				reject(result.errors);
			} else {
				resolve(result.data);
			}
		}).catch((errors) => { // Network or HTTP errors.
			console.warn('Outer error (Network/HTTP?):', errors);
		});
	}).catch(errors => console.error(errors));
}

function factory(graphQLUrl) {
	return function (graphQLQuery, vars = {}, opts = {}) {
		return new Promise((resolve, reject) => {
			getIdToken().then((token) => {
				const headers = { Accept: 'application/json', 'Content-Type': 'application/json', };
				if (token) headers.token = token;

				fetch(graphQLUrl, {
					method: 'POST', headers,
					body: JSON.stringify({ query: graphQLQuery, variables: vars }),
				}).then(response => resolve(response.json()))
					.catch(error => reject(error));
			}).catch(error => reject(error));
		});
	};
}

export const Relay = {
	QL: (fragments, ...params): string => {
		const headingFragments = [];
		let pureQuery = '', headingFragment = '';

		for (let i = 0; i < params.length; i += 1) {
			const nextFragment = gatherFragments(headingFragment, params[i]);
			// if (!nextFragment.name) throw "graph query's fragment error.";

			/* Only add a unique fragment to the heading once,
			 * no need to re-insert it to the header - if it's already there */
			if (headingFragments.indexOf(nextFragment.name) < 0) {
				headingFragment = nextFragment.headings;
				headingFragments.push(nextFragment.name);
			}

			pureQuery += `${fragments[i]} ...${nextFragment.name}`;
		}

		// Insert Fragments heading to final query if possible and return!.
		if (headingFragments.length) pureQuery = headingFragment + pureQuery;
		return pureQuery + fragments[params.length];
	}
};

const fragmentRegEx = /[\t\n ]{0,}fragment[\n\t ]{1,}([\w]+)[\n\t ]{1,}on[\n\t ]{0,}([\w]+)[\n\t ]{0,}[{]{1}[\n\t\ ]+([\w\W]+)[\n\t ]+[}]{1}[\n\t ]{0,}/; // eslint-disable-line
/* E.g for For above regEx -----------------
 fragment jobRequestFragment on JobRequest {
 id,
 name,
 complex {
 id
 age
 more
 }
 }
 * */

function gatherFragments(fragments, fragment) {
	let nextFragmentName, nextFragmentHeadings = fragments;
	const results = fragmentRegEx.exec(fragment);

	/* If matched mutate [fragmentName], [fragmentQuery] & [nextFragments]
	 * for the function's return */
	if (results) {
		// NOTE: results[2] is is the inside query, which not use for now;
		nextFragmentName = results[1];
		nextFragmentHeadings += fragment; // nextFragment header will include current fragment
	}

	return {
		headings: nextFragmentHeadings,
		name: nextFragmentName,
	};
}

global.wire = {
	Relay,
	query,
};