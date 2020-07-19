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

export interface Text {
	default: string;
	inverted: string;
	onPrimary: ColorPalette;
	onNeutral: NeutralPalette;
}

export interface Status {
	error: BasePalette;
	success: BasePalette;
	warning: BasePalette;
};

export interface Theme {
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