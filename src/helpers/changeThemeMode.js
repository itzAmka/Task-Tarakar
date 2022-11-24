export const changeThemeMode = themeMode => {
	const dataTheme = document.querySelector('[data-theme]');
	const currentTheme = dataTheme.attributes['data-theme'];
	currentTheme.value = JSON.parse(localStorage.getItem(themeMode));
};
