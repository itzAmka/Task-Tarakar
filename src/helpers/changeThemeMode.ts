import { getCurrentTheme } from "./getCurrentTheme";

export const changeThemeMode = (themeMode: string) => {
	let currentTheme = getCurrentTheme();


	const localStorageTheme = localStorage.getItem(themeMode);

	console.log('localStorageTheme', localStorageTheme)

	if (!localStorageTheme) return;

	currentTheme = JSON.parse(localStorageTheme) || 'night';
};
