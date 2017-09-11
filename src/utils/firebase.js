import * as firebase from 'firebase';
import { utils as ruuiUtils } from 'react-universal-ui';
import { isServer } from './helper';
import store from '../store';
import * as appActions from '../store/action/app';

const { initializeApp, auth } = firebase;
const provider = new auth.GoogleAuthProvider();

export const fireApp = isServer ? {} : initializeApp({
	apiKey: 'AIzaSyCsu9ZZt9JNYy3liqY98U2BEc_Md-I0Wic',
	authDomain: 'dxg-crm.firebaseapp.com',
	databaseURL: 'https://dxg-crm.firebaseio.com',
	projectId: 'dxg-crm',
	storageBucket: 'dxg-crm.appspot.com',
	messagingSenderId: '502542271073'
});

export function getIdToken() {
	return new Promise((resolve, reject) => {
		const currentUser = auth().currentUser;

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
	if (isServer || !ruuiUtils.isBrowser) return;

	const store = window.__NEXT_REDUX_STORE__;
	if (store && store.dispatch) {
		store.dispatch(payload);
	}
}

export function login() {
	return auth().signInWithRedirect(provider);
}

export function logout() {
	return auth().signOut();
}

if (!isServer && ruuiUtils.isBrowser) {
	window.app = fireApp;
	window.firebase = firebase;

	auth().onAuthStateChanged((profile) => {
		dispatch(appActions.syncUserProfile(profile));
	});
}