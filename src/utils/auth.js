import { utils as ruuiUtils } from 'react-universal-ui';
import { fireApp, provider } from './firebase';
import * as appActions from '../store/action/app';

export function getIdToken() {
	return new Promise((resolve, reject) => {
		const currentUser = fireApp.auth().currentUser;

		if (currentUser) {
			currentUser.getIdToken().then((token) => {
				resolve(token);
			}).catch(error => reject(error));
		} else {
			resolve(null);
		}
	});
}

export function dispatch(payload) {
	if (ruuiUtils.isBrowser) {
		const globalStore = window.__NEXT_REDUX_STORE__;
		if (globalStore && globalStore.dispatch) {
			globalStore.dispatch(payload);
		}
	} else {

	}
}

export function loginBrowser() {
	return fireApp.auth().signInWithRedirect(provider);
}

export function logout() {
	return fireApp.auth().signOut();
}

if (!ruuiUtils.isServer) {
	fireApp.auth().onAuthStateChanged((profile) => {
		dispatch(appActions.syncUserProfile(profile || {}));
	});
}