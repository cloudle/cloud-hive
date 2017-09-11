import { combineReducers } from 'redux';
import { routeReducer as routeReducerMaker } from 'react-universal-ui';
import appReducer from './app';
import routeConfigs from '../../routes';

const initialRouterState = {

};

const routeReducer = routeReducerMaker(
	routeConfigs,
	(state = initialRouterState, action) => {
		switch (action.type) {
		default:
			return state;
		}
	}
);

export default combineReducers({
	app: appReducer,
	router: routeReducer,
});