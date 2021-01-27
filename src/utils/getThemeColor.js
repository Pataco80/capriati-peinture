import { setTheme } from '../theme/helpers'
const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme

  if(theme === 'dark') return `${setTheme.dark.background}`
  if(theme === 'light') return `${setTheme.light.background}`
}

export default getThemeColor