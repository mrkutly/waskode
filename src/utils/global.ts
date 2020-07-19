import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont, typography } from './typography';

export const GlobalStyle = createGlobalStyle`
	${normalize()}

	html {
		font-size: ${typography.base};
		box-sizing: border-box;
	}	

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		font-family: ${primaryFont};
	}

	h1 {
		font-size: ${typography.h1};
	}
	
	h2 {
		font-size: ${typography.h2};
	}
	
	h3 {
		font-size: ${typography.h3};
	}
	
	h4 {
		font-size: ${typography.h4};
	}
	
	h5 {
		font-size: ${typography.h5};
	}
	
	p {
		font-size: ${typography.paragraph};
	}
`;

