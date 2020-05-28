import { StyleSheet } from 'react-native';
import ThemeOney from '../../assets/styles/ThemeOney';

export const styles = StyleSheet.create({
	boxContainer: {
		height: 294,
		width: 324,
		borderWidth: 2,
		padding: 30,
		borderColor: ThemeOney.border_color_lightgrey4,
		alignItems: 'flex-start',
		flexDirection: 'column',
		position: 'relative',
	},
	title: {
		fontSize: 26,
		color: ThemeOney.text_color_dark,
		marginBottom: 15,
	},
	text: {
		fontSize: 18,
		color: ThemeOney.text_color_darkgrey,
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

export const BtnContainer = StyleSheet.create({
	common: {
		width: 260,
		height: 60,
		justifyContent: 'center',
		alignContent: 'center',
		flexDirection: 'row',
		borderWidth: 2,
		position: 'absolute',
		bottom: 30,
		left: 30,
	},
	primary: {
		backgroundColor: ThemeOney.link_bg_color_primary,
	},
	default: {
		borderColor: ThemeOney.border_color_white,
		backgroundColor: 'transparent',
	},
	secondary: {
		backgroundColor: ThemeOney.link_bg_color_darkgrey,
	},
	tertiaty: {
		borderColor: ThemeOney.border_color_terciary,
		backgroundColor: ThemeOney.link_bg_color_light,
	},
});

export const BtnText = StyleSheet.create({
	common: {
		fontFamily: 'Arial',
		fontWeight: 'bold',
		fontSize: 16,
	},
	primary: {
		color: ThemeOney.text_color_light,
	},
	secondary: {
		color: ThemeOney.text_color_light,
	},
	tertiaty: {
		color: ThemeOney.text_color_darkgrey4,
	},
	default: {
		color: ThemeOney.text_color_light,
	},
});
