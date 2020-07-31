import createFontface from '../utils/createFontFace';
import { neutral, status, text } from '../utils/colors';
import { Theme } from '../types';
import raleway from './fonts/raleway';
import roboto from './fonts/roboto';

const fontFace = createFontface([...roboto, ...raleway]);

const primary = {
	100: '#80FFDB',
	200: '#56CFE1',
	300: '#4EA8DE',
	400: '#5E60CE',
	500: '#7400B8',
};

const onPrimary = {
	100: '#000000',
	200: '#FFFFFF',
	300: '#FFFFFF',
	400: '#FFFFFF',
	500: '#FFFFFF',
};

export const defaultTheme: Theme = {
	fontFace,
	headerFont: 'RobotoMono, monospaced',
	neutral,
	paragraphFont: 'Raleway, sans-serif',
	primary,
	text: {
		...text,
		onPrimary,
	},
	status,
};