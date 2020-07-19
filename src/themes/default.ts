import { neutral, status, text } from '../utils/colors';
import { Theme } from '../types';

const primary = {
	100: '#80FFDB',
	200: '#56CFE1',
	300: '#4EA8DE',
	400: '#5E60CE',
	500: '#7400B8',
};

export const defaultTheme: Theme = {
	neutral,
	primary,
	text,
	status,
};