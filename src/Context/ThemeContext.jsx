import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

//const colors = []

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  //const [mainColor, setMainColor] = useState(1)

  const handleTheme = () => {
    theme === 'dark' 
      ? setTheme('ligth')
      : setTheme('dark') 
  }

  const actions = {handleTheme}
  const state = {theme}

  return <ThemeContext.Provider value={{actions, state}}>
    {children}
  </ThemeContext.Provider>
}

export const useTheme = () => {
  const { 
    actions: { handleTheme },
    state: { theme }
   } = useContext(ThemeContext)

   return { handleTheme, theme }
}
