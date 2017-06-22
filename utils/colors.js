import tinyColorImport from 'tinycolor2';

export const tinyColor = tinyColorImport;

const main = '#ef5c6e'; // fresh pink
// const main = '#ce5b78'; // grey pink
// const main = '#ae5e9a'; // Orchid 2014
// const main = '#239bff';
const lighterMain = tinyColor(main).lighten(15).toHexString();
const darkerMain = tinyColor(main).darken(8).toHexString();

export const colors = {
	main,
	darkerMain,
	lighterMain,
	dark: '#1f2532',
	danger: '#ff8142',
	blue: '#2196F3',
	orange: '#FF9800',
	green: '#8daf7e',
	text: '#444444',
	red: '#ff0008',
	lightGray: '#dedede',
};