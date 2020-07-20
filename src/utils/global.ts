import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { headerFont, paragraphFont, typography } from './typography';

// @ts-ignore
import RobotoMono from '../fonts/RobotoMono.ttf';
// @ts-ignore
import Raleway from '../fonts/Raleway.ttf';
// @ts-ignore
import RalewayItalic from '../fonts/RalewayItalic.ttf';

export const GlobalStyle = createGlobalStyle`
	${normalize()}

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

	html {
		font-size: ${typography.base};
		box-sizing: border-box;
	}	

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		font-family: ${paragraphFont};
	}
	
	main {
		max-width: 90%;
		margin: 0 auto;
	}

	h1 {
		font-family: ${headerFont};
		font-size: ${typography.h1};
		font-weight: 300;
	}
	
	h2 {
		font-family: ${headerFont};
		font-size: ${typography.h2};
		font-weight: 300;
	}
	
	h3 {
		font-family: ${headerFont};
		font-size: ${typography.h3};
		font-weight: 300;
	}
	
	h4 {
		font-family: ${headerFont};
		font-size: ${typography.h4};
		font-weight: 250;
	}
	
	h5 {
		font-family: ${headerFont};
		font-size: ${typography.h5};
		font-weight: 250;
	}
	
	p {
		font-size: ${typography.paragraph};
	}
`;

