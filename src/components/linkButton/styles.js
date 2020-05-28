import { StyleSheet } from 'react-native';
import ThemeOney from '../../assets/styles/ThemeOney';

export const BtnContainer = StyleSheet.create({
	common: {},
	primary: {
		marginHorizontal: 30,
		marginVertical: 26,
		width: 424,
		height: 78,
		paddingLeft: 35,
		justifyContent: 'center',
		borderWidth: 2,
		backgroundColor: ThemeOney.button_bg_color_primary,
	},
	default: {
		marginHorizontal: 30,
		marginVertical: 26,
		width: 424,
		height: 78,
		paddingLeft: 35,
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: ThemeOney.border_color_white,
		backgroundColor: 'transparent',
	},
	secondary: {
		marginHorizontal: 30,
		marginVertical: 26,
		width: 424,
		height: 78,
		paddingLeft: 35,
		justifyContent: 'center',
		borderWidth: 2,
		backgroundColor: ThemeOney.button_bg_color__secondary,
	},
	tertiaty: {
		marginHorizontal: 30,
		marginVertical: 26,
		width: 424,
		height: 78,
		paddingLeft: 35,
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: ThemeOney.border_color_terciary,
		backgroundColor: ThemeOney.button_bg_color_terciary,
	},
	navigationLink: {
		paddingHorizontal: 20,
		paddingTop: 12,
		marginHorizontal: 15,
	},
	navigationLinkActive: {
		borderTopWidth: 2,
		paddingTop: 10,
		borderColor: ThemeOney.border_color_primary,
	},
});

export const BtnImage = StyleSheet.create({
	common: {
		width: 20,
		height: 20,
		marginRight: 10,
		backgroundColor: 'transparent',
		resizeMode: 'contain',
	},
});

export const BtnText = StyleSheet.create({
	common: {
		fontFamily: 'Arial',
		fontWeight: 'bold',
	},
	primary: {
		fontSize: 16,
		color: ThemeOney.text_color_light,
	},
	secondary: {
		fontSize: 16,
		color: ThemeOney.text_color_light,
	},
	tertiaty: {
		fontSize: 16,
		color: ThemeOney.text_color_darkgrey4,
	},
	default: {
		fontSize: 16,
		color: ThemeOney.text_color_light,
	},
	navigationLink: {
		fontSize: 12,
		color: ThemeOney.text_color_light,
	},
});
