import tinyColorImport from 'tinycolor2';

export const tinyColor = tinyColorImport;

const main = '#ef5c6e'; // fresh pink
// const main = '#ce5b78'; // grey pink
// const main = '#ae5e9a'; // Orchid 2014
// const main = '#239bff';

const secondary = '#e06c75';
const darkBackground = '#282C34';
const lighterMain = lighten(main, 15);
const darkerMain = darken(main, 8);

export const colors = {
	darken, lighten,
	main,
	darkerMain,
	lighterMain,
	secondary,
	lighterSecondary: lighten(secondary, 4),
	darkerSecondary: darken(secondary, 4),
	darkBackground,
	darkerBackground: darken(darkBackground, 4),
	lightSomeBackground: lighten(darkBackground, 5),
	lighterBackground: lighten(darkBackground, 5),
};

function darken(base = '#ffffff', amount = 5) {
	return tinyColor(base).darken(amount).toHexString();
}

function lighten(base = '#ffffff', amount = 5) {
	return tinyColor(base).lighten(amount).toHexString();
}