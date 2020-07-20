import React, { ChangeEvent } from 'react';
import { InputProps } from '../types';
import {
	Label,
	Input,
	ValidationError,
} from './styles';

const EmailInput = ({ label, name, setValue, validationError, value }: InputProps) => (
	<div>
		<Label htmlFor={name || "email"}>{label || "Email:"}</Label>
		<Input type="email" id={name || "email"} name={name || "email"} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
		<ValidationError>{validationError}</ValidationError>
	</div>
);

export default EmailInput;