import styled from 'styled-components';
import { typography } from '../utils';

export const Label = styled.label`
	font-size: ${typography.paragraph};
	display: block;
	margin-bottom: 4px;
`;

export const Input = styled.input`
	background: ${({ theme }) => theme.neutral[200]};
	color: ${({ theme }) => theme.text.onNeutral[200]};
	font-size: ${typography.paragraph};
	padding: 8px 4px;
	border: none;
	border-bottom: 4px solid ${({ theme }) => theme.primary[100]};
`;

export const SelectStyles = styled.select`
	background: ${({ theme }) => theme.neutral[200]};
	color: ${({ theme }) => theme.text.onNeutral[200]};
	font-size: ${typography.paragraph};
	padding: 8px 4px;
	border: none;
	border-bottom: 4px solid ${({ theme }) => theme.primary[100]};
`;

export const TextAreaStyles = styled.textarea`
	background: ${({ theme }) => theme.neutral[200]};
	color: ${({ theme }) => theme.text.onNeutral[200]};
	font-size: ${typography.paragraph};
	padding: 8px 4px;
	border: none;
	border: 4px solid ${({ theme }) => theme.primary[100]};
`;

export const ValidationError = styled.div`
	color: ${({ theme }) => theme.status.error[100]};
	font-size: ${typography.helper};
	height: calc(1.2 * ${typography.helper});
	line-height: calc(1.2 * ${typography.helper});
	margin-top: 4px;
`;