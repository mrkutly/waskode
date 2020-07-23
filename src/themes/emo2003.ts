import { css } from 'styled-components';
import { neutral, status, text } from '../utils/colors';
import { Theme } from '../types';
// @ts-ignore
import RobotoMono from '../fonts/RobotoMono.ttf';
// @ts-ignore
import Raleway from '../fonts/Raleway.ttf';
// @ts-ignore
import RalewayItalic from '../fonts/RalewayItalic.ttf';

const fontFace = css`
	@font-face {
		font-family: "RobotoMono";
		font-display: fallback;
		src: url(${RobotoMono}) format("truetype");
	}
	
	@font-face {
		font-family: "Raleway";
		font-display: fallback;
		src: url(${Raleway}) format("truetype");
	}

	@font-face {
		font-family: "Raleway";
		font-display: fallback;
		font-style: italic;
		src: url(${RalewayItalic}) format("truetype");
	}
`;

const primary = {
	100: '#E66ED2',
	200: '#F748DA',
	300: '#6B045D',
	400: '#170715',
	500: '#080207',
};

export const emo2003: Theme = {
	fontFace,
	neutral,
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