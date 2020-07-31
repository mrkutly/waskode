import createFontface from '../utils/createFontFace';
import { neutral, status, text } from '../utils/colors';
import { Theme } from '../types';
import raleway from './fonts/raleway';
import roboto from './fonts/roboto';

const fontFace = createFontface([...roboto, ...raleway]);

const primary = {
	100: '#59ecd8',
	200: '#92ffaa',
	300: '#9fbdff',
	400: '#198ac1',
	500: '#080207',
};

export const myVibe: Theme = {
	fontFace,
	headerFont: 'RobotoMono, monospaced',
	neutral,
	paragraphFont: 'Raleway, sans-serif',
	primary,
	text: {
		...text,
		onPrimary: {
			100: '#000000',
			200: '#000000',
			300: '#FFFFFF',
			400: '#FFFFFF',
			500: '#FFFFFF',
		}
	},
	status,
};