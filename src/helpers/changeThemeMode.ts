import { getCurrentTheme } from '@helpers/getCurrentTheme'

export const changeThemeMode = (themeMode: string) => {
  let currentTheme = getCurrentTheme()

  const localStorageTheme = localStorage.getItem(themeMode)

  if (!localStorageTheme) return

  currentTheme = JSON.parse(localStorageTheme) || 'night'

  const dataTheme = document.querySelector('[data-theme]') as HTMLHtmlElement

  dataTheme.setAttribute('data-theme', currentTheme)
}
