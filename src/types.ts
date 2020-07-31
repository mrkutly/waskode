import { ChangeEvent } from 'react';
import { FlattenSimpleInterpolation } from "styled-components";

export interface BasePalette {
	100: string;
	200: string;
	300: string;
}

export type ColorPalette = BasePalette & {
	400: string;
	500: string;
};

export type NeutralPalette = ColorPalette & { 600: string; };

export type Text = BasicText & { onPrimary: ColorPalette; };

export interface BasicText {
	default: string;
	inverted: string;
	onNeutral: NeutralPalette;
}

export interface Status {
	error: BasePalette;
	success: BasePalette;
	warning: BasePalette;
}

export interface Theme {
	fontFace: FlattenSimpleInterpolation;
	headerFont: string;
	neutral: NeutralPalette;
	paragraphFont: string;
	primary: ColorPalette;
	status: Status;
	text: Text;
}

export interface FontFace {
	family: string;
	weight: number;
	style: string;
	woff2: any;
	woff: any;
}

// Props

interface BaseInputProps {
	label?: string;
	name?: string;
	validationError: string;
	value: string;
}

export type InputProps = BaseInputProps & {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type TextAreaProps = BaseInputProps & {
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};