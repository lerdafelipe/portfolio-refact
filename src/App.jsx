import './App.css'
import About from './components/About/About'
import ColorSwitcher from './components/Color/ColorSwitcher'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Portfolio from './components/Portfolio/Portfolio'
import Preloader from './components/Preloader/Preloader'

function App() {
  return (
    <>
      <Header />


      <About />
      <Portfolio />
      <Contact />
      <ColorSwitcher />
      <Preloader />


      <Footer />
    </>
  )
}

export default App
