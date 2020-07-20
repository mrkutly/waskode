import React, { ChangeEvent } from 'react';
import { InputProps } from '../types';
import {
	Label,
	Input,
	ValidationError,
} from './styles';

const TextInput = ({ label, name, setValue, validationError, value }: InputProps) => (
	<div>
		<Label htmlFor={name}>{label}</Label>
		<Input type="text" name={name} id={name} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
		<ValidationError>{validationError}</ValidationError>
	</div>
);

export default TextInput;