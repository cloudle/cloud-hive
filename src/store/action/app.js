import * as Actions from '../actions';

export function increaseCounter (volume = 1) {
	return { type: Actions.IncreaseCounter, volume };
}

export function syncUserProfile (profile) {
	const wrappedProfile = profile || {
			unAuthenticated: true,
		};

	return { type: Actions.SyncUserProfile, profile };
}

export function toggleRouteLoaded (flag) {
	return { type: Actions.ToggleRouteLoaded, flag };
}

export function updateLoadingProgress (progress) {
	return { type: Actions.UpdateLoadingProgress, progress };
}