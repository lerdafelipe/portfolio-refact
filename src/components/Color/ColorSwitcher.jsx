import { useState } from 'react'
import { MoonIcon, SettingIcon, SunIcon, UserIcon } from '../../Icons/Icons'
import './ColorSwitcher.css'
import {useTheme} from '../../Context/ThemeContext'
import { useTranslation } from 'react-i18next'

const ColorSwitcher = () => {
	const [open, setOpen] = useState(false)
	const {handleTheme, handleMainColor, theme} = useTheme()
	const { t, i18n } = useTranslation('global')
	const [currentLanguage, setCurrentLanguage] = useState(i18n.language)

	const darkTheme = theme === 'dark'

	const changeLanguage = (e) => {
		const lng = e.target.id
		i18n.changeLanguage(lng)
		e.target.className = 'active'
		window.document.getElementById(currentLanguage).classList.remove('active')
		setCurrentLanguage(lng)
	}

	const handleOpen = () => setOpen(!open)

  return (
    <div className={`style-switcher outer-shadow ${open ? 'open': null}`}>

			<div onClick={handleOpen} className="style-switcher-toggler s-icon outer-shadow hover-in-shadow">
				<SettingIcon  className='fa-spin'/>
			</div>

			<div onClick={handleTheme} className="day-night s-icon outer-shadow hover-in-shadow">
				{darkTheme? <SunIcon /> : <MoonIcon />}
			</div>

			<h4 id="styleTitle" style={{marginTop: 0}}>{t('styleTitle')}</h4>

			<div className="colors">
				<span className="color-1" onClick={()=> {handleMainColor(1)}}></span>
				<span className="color-2" onClick={()=> {handleMainColor(2)}}></span>
				<span className="color-3" onClick={()=> {handleMainColor(3)}}></span>
				<span className="color-4" onClick={()=> {handleMainColor(4)}}></span>
				<span className="color-5" onClick={()=> {handleMainColor(5)}}></span>
			</div>

			<h4 id="lang-title">{t('LangTitle')}</h4>

			<button onClick={changeLanguage}  id="es" className="active">• Español</button>
			
			<br/>
			
			<button onClick={changeLanguage} id="en" >• English</button>
			
			<br/>
			
			<button onClick={changeLanguage} id="it" >• Italiano</button>
			
			<h4 id="visitor-title">{t('VisitTitle')}   <UserIcon /></h4>
			
			<button onClick={()=> {}} id="first-visitor">• {t('firtVisitor')}</button>
			
			<button  onClick={()=> {}} id="second-visitor">• {t('secondVisitor')}</button>
		</div>
  )
}

export default ColorSwitcher
