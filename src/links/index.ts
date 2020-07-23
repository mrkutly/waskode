import styled from 'styled-components';

export const Link = styled.a`
	color: ${({ theme }) => theme.text.default};
	cursor: pointer;
	text-decoration: none;
	transition: all 0.2s ease;
	border-bottom: 4px solid ${({ theme }) => theme.primary[200]};

	&:hover, &:focus, &:active {
		font-weight: 500;
	}
	
	&:hover {
		color: ${({ theme }) => theme.text.default};
		border-color: ${({ theme }) => theme.primary[400]};
	}

	&:focus {
		border-color:${({ theme }) => theme.primary[400]};
		outline: 2px solid ${({ theme }) => theme.primary[100]};
		outline-offset: 4px;
	}

	&:active {
		padding: 4px;
		background: ${({ theme }) => theme.primary[400]};
		color: ${({ theme }) => theme.text.onPrimary[400]};
	}

	&:not(:hover)&:not(:active)&:not(:focus)&:visited {
		color: ${({ theme }) => theme.neutral[500]};
	}
`;