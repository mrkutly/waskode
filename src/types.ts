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
	neutral: NeutralPalette;
	primary: ColorPalette;
	status: Status;
	text: Text;
}

// Props

export interface InputProps {
	label?: string;
	name?: string;
	setValue: (value: string) => null;
	validationError: string;
	value: string;
}