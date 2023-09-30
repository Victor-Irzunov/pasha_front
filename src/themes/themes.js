import { createContext } from "react"


export const themes = {
	ligth: {
		text: '#ccff00',
		isActive: true,
		outline: '10px solid #ccff00',
		backgroundBtn: '#075497',
		textBlue: '#ccff00',
		background: '#ccff00',
		num: 1,
	},
	dark: {
		text: '#fb262c',
		isActive: false,
		outline: '10px solid #fb262c',
		backgroundBtn: '#fb262c',
		textBlue: '#075497',
		background: '#fff',
		num: 2,
	},
	third: {
		text: '#fff',
		isActive: false,
		outline: '10px solid #fff',
		backgroundBtn: '#fff',
		textBlue: '#075497',
		background: '#fff',
		num: 3,
	}
}

export const ThemesContext = createContext(themes.ligth)


//#0cf2ff