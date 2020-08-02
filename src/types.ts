import React, { ChangeEvent } from 'react';
import { FlattenSimpleInterpolation } from "styled-components";

export interface BasePalette {
	100: string;
	200: string;
	300: string;
}

export interface ColorPalette extends BasePalette {
	400: string;
	500: string;
};

export interface NeutralPalette extends ColorPalette { 600: string; };

export interface Text extends BasicText { onPrimary: ColorPalette; };

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
	label: string;
	validationError: string;
}

export interface InputProps extends BaseInputProps, React.PropsWithoutRef<JSX.IntrinsicElements["input"]> { };

export interface TextAreaProps extends BaseInputProps, React.PropsWithoutRef<JSX.IntrinsicElements["textarea"]> { };

export interface SelectProps extends BaseInputProps, React.PropsWithoutRef<JSX.IntrinsicElements["select"]> {
	onChange: (event: ChangeEvent<HTMLSelectElement>, data?: any) => void;
	options: { label: string; value: string; data?: any; }[];
};