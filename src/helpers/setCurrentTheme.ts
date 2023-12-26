export const setCurrentTheme = (themeMode: string): void => {
  const dataTheme = document.querySelector('[data-theme]') as HTMLHtmlElement
  const currentTheme = dataTheme.attributes.getNamedItem('data-theme') as Attr

  if (!currentTheme) return

  currentTheme.value = themeMode
}
