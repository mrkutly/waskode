import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { typography } from './typography';
import { Theme } from '../types';

export const createGlobalStyles = (theme: Theme) => createGlobalStyle`
	${normalize()}
	${theme.fontFace}

	:root {
		--primary-100: ${theme.primary[100]};
		--primary-200: ${theme.primary[200]};
		--primary-300: ${theme.primary[300]};
		--primary-400: ${theme.primary[400]};
		--primary-500: ${theme.primary[500]};
		--neutral-100: ${theme.neutral[100]};
		--neutral-200: ${theme.neutral[200]};
		--neutral-300: ${theme.neutral[300]};
		--neutral-400: ${theme.neutral[400]};
		--neutral-500: ${theme.neutral[500]};
		--neutral-600: ${theme.neutral[600]};
		--warning-100: ${theme.status.warning[100]};
		--warning-200: ${theme.status.warning[200]};
		--warning-300: ${theme.status.warning[300]};
		--success-100: ${theme.status.success[100]};
		--success-200: ${theme.status.success[200]};
		--success-300: ${theme.status.success[300]};
		--error-100: ${theme.status.error[100]};
		--error-200: ${theme.status.error[200]};
		--error-300: ${theme.status.error[300]};
	}
	
	html {
		font-size: ${typography.base};
		box-sizing: border-box;
	}	

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		font-family: ${theme.paragraphFont};
	}
	
	main {
		max-width: 90%;
		margin: 0 auto;
	}

	h1 {
		font-family: ${theme.headerFont};
		font-size: ${typography.h1};
		font-weight: 300;
	}
	
	h2 {
		font-family: ${theme.headerFont};
		font-size: ${typography.h2};
		font-weight: 300;
	}
	
	h3 {
		font-family: ${theme.headerFont};
		font-size: ${typography.h3};
		font-weight: 300;
	}
	
	h4 {
		font-family: ${theme.headerFont};
		font-size: ${typography.h4};
		font-weight: 250;
	}
	
	h5 {
		font-family: ${theme.headerFont};
		font-size: ${typography.h5};
		font-weight: 250;
	}
	
	p {
		font-size: ${typography.paragraph};
	}
`;

