export const getCurrentTheme = (): string => {
  const dataTheme = document.querySelector('[data-theme]') as HTMLHtmlElement
  const currentTheme = dataTheme.attributes.getNamedItem('data-theme') as Attr

  if (!currentTheme) return 'night'

  return currentTheme.value
}
