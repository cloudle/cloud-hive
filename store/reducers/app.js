import { appReducer } from 'react-universal-ui';
import * as Actions from '../actions';

const initialState = {
	counter: 0,
	routeLoaded: true,
	loadingProgress: 1,
};

export default appReducer((state = initialState, action) => {
	switch (action.type) {
	case Actions.IncreaseCounter:
		return { ...state, counter: state.counter + action.volume };
	case Actions.ToggleRouteLoaded:
		return { ...state, routeLoaded: action.flag === undefined ? !state.routeLoaded : action.flag };
	case Actions.UpdateLoadingProgress:
		return { ...state, loadingProgress: action.progress };
	default:
		return state;
	}
});