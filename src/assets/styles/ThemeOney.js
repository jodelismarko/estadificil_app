const COLOR = {
	LIGHTGREEN: '#81BC00',
	DARKGREEN: '#657F05',
	LIGHTGREY: '#EDEDED',
	LIGHTGREY2: '#D6D6D6',
	LIGHTGREY3: '#CCCCCC',
	LIGHTGREY4: '#E5E5E5',
	DARKGREY: '#999999',
	DARKGREY2: '#6F6F6F',
	DARKGREY3: '#333333',
	DARKGREY4: '#555555',
	LIGHTBLUE: '#2D73A8',
	LIGHTRED: ' #FF8080',
	DARKRED: '#FF3A3A',
	DARK: '#000000',
	LIGHT: '#FFFFFF',
};

const FONTSIZE = {
	XXS: 11,
	XS: 14,
	S: 16,
	M: 18,
	L: 22,
	XL: 26,
	XXL: 30,
};

const PADDING = {
	S: 20,
	M: 30,
};

const OPACITY = {
	DISABLED: 0.4,
};

export default {
	// TEXT -- START
	text_color_primary: COLOR.DARKGREY2,
	text_color_darkgrey: COLOR.DARKGREY,
	text_color_dark: COLOR.DARK,
	text_color_light: COLOR.LIGHT,
	text_color_darkgrey4: COLOR.DARKGREY4,

	text_font_size: FONTSIZE.S,
	title_font_size: FONTSIZE.XXL,
	subtitle_font_size: FONTSIZE.XL,
	input_name_font_size: FONTSIZE.XS,
	header_font_size: FONTSIZE.XXS,
	// TEXT -- END

	//BUTTONS -- START
	button_bg_color__disabled: OPACITY.DISABLED,

	button_bg_color_primary: COLOR.LIGHTGREEN,
	button_bg_color_primary__pressed: COLOR.DARKGREEN,

	button_bg_color__secondary: COLOR.DARKGREY,
	button_bg_color_secondary__pressed: COLOR.DARKGREY2,

	button_bg_color_terciary: COLOR.LIGHT,
	button_bg_color_terciary__pressed: COLOR.DARKGREY4,
	//BUTTONS --  END

	// LINKS -- START
	link_text_color_primary: COLOR.LIGHTBLUE,
	link_bg_color_primary: COLOR.LIGHTGREEN,
	link_bg_color_darkgrey: COLOR.DARKGREY,
	link_bg_color_light: COLOR.LIGHT,
	// LINKS -- END

	//BORDERS -- START
	border_color_primary: COLOR.LIGHTGREEN,
	border_color_white: COLOR.LIGHT,
	border_color_terciary: COLOR.DARKGREY4,
	border_color_lightgrey4: COLOR.LIGHTGREY4,
	//BORDERS -- END
};
