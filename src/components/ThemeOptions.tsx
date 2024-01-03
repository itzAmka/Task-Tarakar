import { ChangeEvent, useEffect } from 'react'

import { setCurrentTheme } from '@helpers/index'
import { useLocalStorage } from '@hooks/index'

const ThemeOptions = () => {
  const [selectedOptionTheme, setSelectedOptionTheme] = useLocalStorage<string>(
    'selectedOptionTheme',
    'night',
  )

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement
    const value = target.value

    setSelectedOptionTheme(value as string)
  }

  useEffect(() => {
    setCurrentTheme(selectedOptionTheme)
  }, [selectedOptionTheme])

  return (
    <select
      onChange={handleOptionChange}
      value={selectedOptionTheme}
      name='themes'
      id='theme-modes'
      className='select select-accent'
    >
      <option value='light'>Light</option>
      <option value='dark'>dark</option>
      <option value='night'>night</option>
      <option value='synthwave'>synthwave</option>
      <option value='retro'>retro</option>
      <option value='cyberpunk'>cyberpunk</option>
      <option value='valentine'>valentine</option>
      <option value='halloween'>halloween</option>
      <option value='forest'>forest</option>
      <option value='aqua'>aqua</option>
      <option value='wireframe'>wireframe</option>
      <option value='black'>black</option>
      <option value='luxury'>luxury</option>
      <option value='dracula'>dracula</option>
      <option value='coffee'>coffee</option>
    </select>
  )
}

export default ThemeOptions
