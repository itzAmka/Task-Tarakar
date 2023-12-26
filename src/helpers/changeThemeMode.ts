import { getCurrentTheme } from '@helpers/getCurrentTheme'

export const changeThemeMode = (themeMode: string) => {
  let currentTheme = getCurrentTheme()

  const localStorageTheme = localStorage.getItem(themeMode)

  if (!localStorageTheme) return

  currentTheme = JSON.parse(localStorageTheme) || 'night'
}
