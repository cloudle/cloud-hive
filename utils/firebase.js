import * as firebase from 'firebase';
import { isServer } from './helper';
import store from '../store';
import * as appActions from '../store/action/app'

const { initializeApp, auth } = firebase;
const provider = new auth.GoogleAuthProvider();

export const fireApp = isServer ? {} : initializeApp({
	apiKey: "AIzaSyCsu9ZZt9JNYy3liqY98U2BEc_Md-I0Wic",
	authDomain: "dxg-crm.firebaseapp.com",
	databaseURL: "https://dxg-crm.firebaseio.com",
	projectId: "dxg-crm",
	storageBucket: "dxg-crm.appspot.com",
	messagingSenderId: "502542271073"
});

export function login() {
	return auth().signInWithRedirect(provider);
}

export function logout() {
	return auth().signOut();
}

if (!isServer) {
	window.firebase = firebase;

	auth().onAuthStateChanged((profile) => {
		store().dispatch(appActions.syncUserProfile(profile));
	});
}