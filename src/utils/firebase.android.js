import firebaseNative from 'react-native-firebase';
import { defaultFireAppConfigs } from './configs';

export const fireApp = firebaseNative.initializeApp(defaultFireAppConfigs);
console.log(fireApp);