import React from 'react';
import { I18nManager, Image, Platform, StyleSheet, TouchableOpacity } from 'react-native';

const backIconImage = require('./back-icon.png');

type Props = {
	onPress: Function,
};

const NavigationHeaderBackButton = (props: Props) => (
	<TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
		<Image style={styles.button} source={backIconImage} />
	</TouchableOpacity>
);

NavigationHeaderBackButton.propTypes = {
	onPress: Function,
};

const styles = StyleSheet.create({
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		height: 24,
		width: 24,
		margin: new Set(['ios', 'web']).has(Platform.OS) ? 10 : 16,
		resizeMode: 'contain',
		transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
	}
});

export default NavigationHeaderBackButton;
