import { Text, NeutralPalette, Status } from '../types';

export const text: Text = {
	default: '#000000',
	inverted: '#FFFFFF',
	onPrimary: {
		100: '#000000',
		200: '#FFFFFF',
		300: '#FFFFFF',
		400: '#FFFFFF',
		500: '#FFFFFF',
	},
	onNeutral: {
		100: '#000000',
		200: '#000000',
		300: '#000000',
		400: '#FFFFFF',
		500: '#FFFFFF',
		500: '#FFFFFF',
	},
};

export const neutral: NeutralPalette = {
	100: '#FFFFFF',
	200: '#F4F5F7',
	300: '#E1E1E1',
	400: '#737581',
	500: '#4A4B53',
	600: '#000000',
};

export const status: Status = {
	error: {
		100: '#D0454C',
		200: '#B54248',
		300: '#95353A',
	},
	success: {
		100: '#529E66',
		200: '#367B48',
		300: '#276738',
	},
	warning: {
		100: '#E1C542',
		200: '#CAB23F',
		300: '#B49E35',
	},
};