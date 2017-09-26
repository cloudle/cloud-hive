import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { StatusBar, View, Text, StyleSheet } from 'react-native';
import {
	Button, Modal, Dropdown, Snackbar, ContextProvider, NavigationCardStack,
	ruuiActions, routeAction, utils as ruuiUtils,
} from 'react-universal-ui';
import Drawer from 'react-native-drawer';

import DrawerPane from './components/mobile/drawer';
import NavigationHeader from './components/mobile/navigationHeader';
import Markdown from './components/markdown';
import { colors } from './utils';
import * as appActions from './store/action/app';

type Props = {
	dispatch?: Function,
	counter?: number,
	router?: Object,
};

@connect(({ router, app }) => {
	return {
		router,
		counter: app.counter,
	};
})

class App extends Component {
	props: Props;

	componentWillMount() {
		if (ruuiUtils.isIos) {
			StatusBar.setBarStyle('light-content', true);
		} else if (ruuiUtils.isAndroid) {
			StatusBar.setBackgroundColor('transparent');
			StatusBar.setTranslucent(true);
		}
	}

	render() {
		return <Drawer
			type="overlay" side="right"
			negotiatePan tapToClose
			panOpenMask={0}
			openDrawerOffset={0.2}
			content={<DrawerPane/>}
			tweenHandler={drawerTween}>

			<NavigationCardStack
				style={styles.navigator}
				navigationState={this.props.router}
				renderScene={this.renderScene}
				renderHeader={this.renderHeader}
				gestureResponseDistance={50}
				onNavigateBack={() => this.props.dispatch(routeAction.pop())}/>

			<Modal/>
			<Dropdown/>
			<Snackbar/>
		</Drawer>;
	}

	renderScene = (props) => {
		const activeRoute = props.scene.route,
			Scene = activeRoute.component;

		return <View
			style={[styles.sceneWrapper, activeRoute.style]}>
			{activeRoute.hideNavigation
				? <View/>
				: <View style={{ backgroundColor: colors.main, height: 88, }}/>}
			<Scene routeParams={activeRoute.params}/>
		</View>;
	};

	renderHeader = (sceneProps) => {
		if (!sceneProps.scene.route.hideNavigation) {
			return <NavigationHeader {...sceneProps}/>;
		} else {
			return <View/>;
		}
	};
}

function drawerTween(ratio, side = 'left') {
	return {
		main: { opacity: (2 - ratio) / 1.2 },
		drawer: {
			shadowColor: '#000000',
			shadowOpacity: 0.1 + (ratio * 0.3),
			shadowRadius: ratio * 60,
			elevation: ratio * 50,
		}
	};
}

type ContainerProps = {
	store: Object,
};

export default function AppContainer({ store }: ContainerProps) {
	return <Provider store={store}>
		<App/>
	</Provider>;
}

const markdownStyles = {
	heading1: {
		fontSize: 24,
	},
	heading2: {
		fontSize: 22,
	},
	link: {
		color: 'pink',
	},
	mailTo: {
		color: 'orange',
	},
	text: {
		color: '#555555',
	},
};

const styles = StyleSheet.create({
	drawer: {
		backgroundColor: '#000',
	},
	navigator: {
		flex: 1, backgroundColor: colors.main,
	},
	sceneWrapper: {
		flex: 1,
	}
});