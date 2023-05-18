import './App.css'
import { useTheme } from './Context/ThemeContext'
import Home from './Views/Home'
import ColorSwitcher from './components/Color/ColorSwitcher'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Preloader from './components/Preloader/Preloader'

function App() {
  const {theme} = useTheme()
  return (
    <>
      <main data-theme={theme}>
        <Header />


        <Home />


        <ColorSwitcher />

        <Preloader />

        <Footer />
      </main>
    </>
  )
}

export default App
