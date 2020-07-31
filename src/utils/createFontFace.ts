import { css } from 'styled-components';
import { FontFace } from '../types';

export default (fontFaces: FontFace[]) => fontFaces.map((font) => css`	
	@font-face {
		font-family: ${font.family};
		font-style: ${font.style};
		font-weight: ${font.weight};
		font-display: swap;
		src: local(''),
			url('${font.woff2}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
			url('${font.woff}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}
`);