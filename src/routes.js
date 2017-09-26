import Home from './scenes/home';
import Welcome from './scenes/welcome';
import Playground from './scenes/playground';

export default {
	home: {
		title: '',
		component: Home,
	},
	welcome: {
		title: 'Welcome',
		component: Welcome,
	},
	index: {
		title: 'Playground',
		component: Playground,
		hideNavigation: true,
	},
};