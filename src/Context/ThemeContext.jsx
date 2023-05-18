import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

const colors = ['blue', 'orange', 'green', 'pink', 'red']

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const [mainColor, setMainColor] = useState(1)

  const handleTheme = () => {
    theme === 'dark' 
      ? setTheme('ligth')
      : setTheme('dark') 
  }

  const handleMainColor = ( num ) => setMainColor(num)
 
  const actions = { handleTheme, handleMainColor }
  const state = { theme, primaryColor: colors[mainColor-1] }

  return <ThemeContext.Provider value={{actions, state}}>
    {children}
  </ThemeContext.Provider>
}

export const useTheme = () => {
  const { 
    actions: { handleTheme, handleMainColor },
    state: { theme, primaryColor }
   } = useContext(ThemeContext)

   return { handleTheme, theme, primaryColor, handleMainColor }
}
