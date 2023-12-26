export const changeThemeMode = (themeMode: string) => {
	const dataTheme = document.querySelector('[data-theme]') as HTMLHtmlElement;
	const currentTheme = dataTheme.attributes.getNamedItem('data-theme') as Attr;

	if (!currentTheme) return;

	const localStorageTheme = localStorage.getItem(themeMode);

	if (!localStorageTheme) return;

	currentTheme.value = JSON.parse(localStorageTheme) || 'night';
};
