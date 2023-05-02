import './App.css'
import Home from './Views/Home'
import ColorSwitcher from './components/Color/ColorSwitcher'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Preloader from './components/Preloader/Preloader'

function App() {
  return (
    <>
      <Header />


      <Home />


      <ColorSwitcher />

      <Preloader />

      <Footer />
    </>
  )
}

export default App
