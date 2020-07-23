import React, { ChangeEvent } from 'react';
import { InputProps } from '../types';
import {
	Label,
	Input,
	ValidationError,
} from './styles';

export const PasswordInput = ({ label, name, setValue, validationError, value }: InputProps) => (
	<div>
		<Label htmlFor={name || "password"}>{label || "Password:"}</Label>
		<Input type="password" id={name || "password"} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
		<ValidationError>{validationError}</ValidationError>
	</div>
);