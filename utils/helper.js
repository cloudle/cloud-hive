import { Dimensions, AsyncStorage } from 'react-native';

export const ScreenSize = Dimensions.get('window');
export const imageRatio = 0.5625;

export function ScreenWidthPadding(padding, maxSize): number {
	const paddedSize = ScreenSize.width - (padding * 2);
	return paddedSize > maxSize ? maxSize : paddedSize;
}

export function GetRatioHeight(width): number {
	return width * imageRatio;
}

export function formatNumber(n) {
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}