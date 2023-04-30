/* eslint-disable react/prop-types */
import './About.css'
import img from '../../assets/profile-pic.png'
import { GithubIcon, IgIcon, LinkedinIcon, MailIcon, PhoneIcon, WppIcon } from '../../Icons/Icons'

const About = () => {
  return (
    <>
    <section className="sobre-section section active" id="about">
      <div className="effect-wrap">
        <div className="effect effect-1"></div>
        <div className="effect effect-2"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <div className="effect effect-3"></div>
        <div className="effect effect-4"></div>
        <div className="effect effect-5"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="sobre-img">
            <div className="img-box inner-shadow">
              <img className="outer-shadow" src={img} alt="foto-felipe"/>
            </div>
            <div className="social-links">
              <SocialItem Icon={MailIcon} href={'mailto:lerdafelipe@gmail.com'} />

              <SocialItem Icon={PhoneIcon} href={'tel:+5493534279005'} />
              
              <SocialItem Icon={IgIcon} href={'https://www.instagram.com/lerdafelipe/'} />

              <SocialItem Icon={WppIcon} href={'https://api.whatsapp.com/send?phone=+5493534279005'} />

              <SocialItem Icon={LinkedinIcon} href={'https://www.linkedin.com/in/lerdafelipe/'} />

              <SocialItem Icon={GithubIcon} href={'https://github.com/lerdafelipe'} />
              
            </div>
          </div>
          <div className="sobre-info">
            <div className="section-title">
              <h2 value="Web developer">Felipe Lerda</h2>
            </div>
            <p id="home-text"><span>¡Hola! Mi nombre es Felipe Lerda. Soy Desarrollador Web.</span> Tengo 19 años, En 2019, mientras estaba en mi último año del secundario, realicé un curso de <span>EducacionIT</span> y desde ese momento incursiono en el mundo del diseño y desarrollo web. Luego de hacer algunos sitios web, en 2020 decidí meterme de lleno en esta profesión y es por eso que comencé una carrera en <span>Coderhouse</span>.
            Soy la persona indicada para hacer tu sitio web, ya que además de ser alguien que pone mucho esfuerzo en lo que hace, tomo cada proyecto como propio y busco mejoras constantes para que tu idea sea lo más profesional posible.</p>
            <p id="home-secondText">Mi consejo es que te apresures a contactarme para poder confirmar tu sitio web, ya que tengo un límite de proyectos al mes.</p>
          </div>
        </div>
        <div className="row">
          <div className="sobre-pestañas">
            <div className="section-title">
              <h2 id="skills-data" value="Algunas herramientas">Skills</h2>
              <p className="section-subtitle-p" id="skills-subTitle">Existen más herramientas que utilizo, estás son las más comunes.</p>
            </div>
            <div className="skills-cont">
              <SkillItem skill={'HTML'} />
              <SkillItem skill={'CSS'} />
              <SkillItem skill={'Javascript'} />
              <SkillItem skill={'Typescript'} />
              <SkillItem skill={'Jquery'} />
              <SkillItem skill={'Wordpress'} />
              <SkillItem skill={'Next.js'} />
              <SkillItem skill={'React.js'} />
              <SkillItem skill={'Vite.js'} />
              <SkillItem skill={'Redux.js'} />
              <SkillItem skill={'Node.js'} />
              <SkillItem skill={'SQL'} />
              <SkillItem skill={'NoSQL'} />
              <SkillItem skill={'Firebase'} />
              <SkillItem skill={'Git/Github'} />
              <SkillItem skill={'React hooks'} />
              <SkillItem skill={'Vitest / Playwright'} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About

const SkillItem = ({skill}) => {
  return (
    <span className="tab-item outer-shadow">{skill}</span>
  )
}

const SocialItem = ({Icon, href}) => {
  return (
    <a rel='noreferrer' target="_BLANK" href={href} className="outer-shadow hover-in-shadow">
      {Icon && <Icon />}
    </a>
  )
}