import styled from 'styled-components';
import { typography } from '../utils';

const Button = styled.button`
	font-size: ${typography.paragraph};
	padding: 8px 16px;
	transition: all 0.1s ease;

	&:enabled {
		&:hover {
			background: ${({ theme }) => theme.primary[200]};
			border-color: transparent;
			color: ${({ theme }) => theme.text.onPrimary[200]};
		}
		
		&:focus {
			background: ${({ theme }) => theme.primary[200]};
			border-color: transparent;
			color: ${({ theme }) => theme.text.onPrimary[200]};
			outline: 2px solid ${({ theme }) => theme.primary[100]};
			outline-offset: 4px;
		}

		&:active {
			background: ${({ theme }) => theme.primary[100]};
			border-color: transparent;
			color: ${({ theme }) => theme.text.onPrimary[100]};
		}
	}
`;

export const PrimaryButton = styled(Button)`
	background: ${({ theme }) => theme.primary[500]};
	border: none;
	color: ${({ theme }) => theme.text.onPrimary[500]};

	&[disabled] {
		background: ${({ theme }) => theme.neutral[400]};
		color: ${({ theme }) => theme.text.onNeutral[400]};
	}
`;

export const SecondaryButton = styled(Button)`
	background: none;
	border: 1px solid ${({ theme }) => theme.primary[500]};
	color: ${({ theme }) => theme.primary[500]};

	&[disabled] {
		border-color: ${({ theme }) => theme.neutral[400]};
		color: ${({ theme }) => theme.neutral[400]};
	}
`;

export const TertiaryButton = styled(Button)`
	background: none;
	border: none;
	color: ${({ theme }) => theme.primary[500]};

	&[disabled] {
		color: ${({ theme }) => theme.neutral[400]};
	}
`;

export const LargeButton = styled(PrimaryButton)`
	font-size: ${typography.h5};
	padding: 16px 24px;
`;

export const SmallButton = styled(PrimaryButton)`
	font-size: ${typography.helper};
	padding: 4px 8px;
`;
