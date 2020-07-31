import createFontface from '../utils/createFontFace';
import { neutral, status, text } from '../utils/colors';
import { Theme } from '../types';
import raleway from './fonts/raleway';
import roboto from './fonts/roboto';

const fontFace = createFontface([...roboto, ...raleway]);

const primary = {
	100: '#E66ED2',
	200: '#F748DA',
	300: '#6B045D',
	400: '#170715',
	500: '#080207',
};

export const emo2003: Theme = {
	fontFace,
	headerFont: 'RobotoMono, monospaced',
	neutral,
	paragraphFont: 'Raleway, sans-serif',
	primary,
	text: {
		...text,
		onPrimary: {
			100: '#000000',
			200: '#FFFFFF',
			300: '#FFFFFF',
			400: '#FFFFFF',
			500: '#FFFFFF',
		}
	},
	status,
};