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
	100: '#80FFDB',
	200: '#56CFE1',
	300: '#4EA8DE',
	400: '#5E60CE',
	500: '#7400B8',
};

export const defaultTheme: Theme = {
	fontFace,
	neutral,
	primary,
	text,
	status,
};