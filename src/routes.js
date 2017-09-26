import Home from './scenes/home';
import Welcome from './scenes/welcome';

export default {
	home: {
		title: '',
		component: Home,
	},
	index: {
		title: 'Welcome',
		component: Welcome,
		hideNavigation: true,
	},
};