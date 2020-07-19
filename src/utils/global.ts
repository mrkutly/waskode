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
	
	main {
		max-width: 90%;
		margin: 0 auto;
	}

	h1 {
		font-size: ${typography.h1};
		font-weight: 500;
	}
	
	h2 {
		font-size: ${typography.h2};
		font-weight: 500;
	}
	
	h3 {
		font-size: ${typography.h3};
		font-weight: 500;
	}
	
	h4 {
		font-size: ${typography.h4};
		font-weight: 450;
	}
	
	h5 {
		font-size: ${typography.h5};
		font-weight: 450;
	}
	
	p {
		font-size: ${typography.paragraph};
	}
`;

