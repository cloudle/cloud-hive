import * as Actions from '../actions';

export function increaseCounter (volume = 1) {
	return { type: Actions.IncreaseCounter, volume };
}

export function toggleRouteLoaded (flag) {
	return { type: Actions.ToggleRouteLoaded, flag };
}

export function updateLoadingProgress (progress) {
	return { type: Actions.UpdateLoadingProgress, progress };
}