import createFontface from '../utils/createFontFace';
import { neutral, status, text } from '../utils/colors';
import { Theme } from '../types';
import cormorant from './fonts/cormorantGaramond';
import montserrat from './fonts/montserrat';

const fontFace = createFontface([...montserrat, ...cormorant]);

const primary = {
	100: '#FFEAAE',
	200: '#79ADDC',
	300: '#FFC100',
	400: '#FF8200',
	500: '#F16055',
};

const onPrimary = {
	100: '#000000',
	200: '#000000',
	300: '#000000',
	400: '#FFFFFF',
	500: '#FFFFFF',
};

export const directions: Theme = {
	fontFace,
	headerFont: 'Cormorant Garamond, serif',
	neutral,
	paragraphFont: 'Montserrat, sans-serif',
	primary,
	text: {
		...text,
		onPrimary,
	},
	status,
};