import { initializeApp, auth } from 'firebase';
import { utils as rUtils } from 'react-universal-ui';
import { defaultFireAppConfigs } from './configs';

export const fireApp = rUtils.isBrowser ? initializeApp(defaultFireAppConfigs) : {};
export const provider = rUtils.isBrowser ? new auth.GoogleAuthProvider() : {};