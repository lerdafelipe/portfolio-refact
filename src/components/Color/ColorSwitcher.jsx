import { SettingIcon, SunIcon, UserIcon } from '../../Icons/Icons'
import './ColorSwitcher.css'

const ColorSwitcher = () => {
  return (
    <div className="style-switcher outer-shadow">
		<div className="style-switcher-toggler s-icon outer-shadow hover-in-shadow">
			<SettingIcon  className='fa-spin'/>
		</div>
		<div className="day-night s-icon outer-shadow hover-in-shadow">
			<SunIcon />
		</div>
		<h4 id="styleTitle" style={{marginTop: 0}}>Estilo del sitio</h4>
		<div className="colors">
			<span className="color-1" onClick={()=> {}}></span>
			<span className="color-2" onClick={()=> {}}></span>
			<span className="color-3" onClick={()=> {}}></span>
			<span className="color-4" onClick={()=> {}}></span>
			<span className="color-5" onClick={()=> {}}></span>
		</div>
		<h4 id="lang-title">Language</h4>
		<button onClick={()=> {}}  id="lang-esp" className="active">• Español</button><br/>
		<button onClick={()=> {}} id="lang-eng" >• English</button>
		<h4 id="visitor-title">Visitor Type<UserIcon /></h4>
		<button onClick={()=> {}} id="first-visitor">• A Recruiter</button>
		<button  onClick={()=> {}} id="second-visitor">• An important person</button>
	</div>
  )
}

export default ColorSwitcher
