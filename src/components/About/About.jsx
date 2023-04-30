import './About.css'
import img from '../../assets/profile-pic.png'
import { FbIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, WppIcon } from '../../Icons/Icons'

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
              <a rel='noreferrer' target="_BLANK" href="mailto:lerdafelipe@gmail.com" className="outer-shadow hover-in-shadow"><MailIcon /></a>
              <a rel='noreferrer' target="_BLANK" href="tel:+5493534279005" className="outer-shadow hover-in-shadow"><PhoneIcon /></a>
              <a rel='noreferrer' target="_BLANK" href="https://www.instagram.com/lerdafelipe/" className="outer-shadow hover-in-shadow"><FbIcon /></a>
              <a rel='noreferrer' target="_BLANK" href="https://api.whatsapp.com/send?phone=+5493534279005" className="outer-shadow hover-in-shadow"><WppIcon /></a>
              <a rel='noreferrer' target="_BLANK" href="https://www.linkedin.com/in/lerdafelipe/" className="outer-shadow hover-in-shadow"><LinkedinIcon /></a>
              <a rel='noreferrer' target="_BLANK" href="https://github.com/lerdafelipe" className="outer-shadow hover-in-shadow"><GithubIcon /></a>
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
              <span className="tab-item outer-shadow">HTML</span>
              <span className="tab-item outer-shadow">CSS</span>
              <span className="tab-item outer-shadow">Javascript</span>
              <span className="tab-item outer-shadow">SCSS</span>
              <span className="tab-item outer-shadow">Jquery</span>
              <span className="tab-item outer-shadow">Wordpress</span>
              <span className="tab-item outer-shadow">Next.js</span>
              <span className="tab-item outer-shadow">React.js</span>
              <span className="tab-item outer-shadow">Node.js</span>
              <span className="tab-item outer-shadow">Express.js</span>
              <span className="tab-item outer-shadow">Firebase</span>
              <span className="tab-item outer-shadow">SQL</span>
              <span className="tab-item outer-shadow">NoSQL</span>
              <span className="tab-item outer-shadow">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
