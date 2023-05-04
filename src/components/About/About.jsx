/* eslint-disable react/prop-types */
import './About.css'
import img from '../../assets/profile-pic.png'
import { useTranslation } from 'react-i18next'
import { GithubIcon, IgIcon, LinkedinIcon, MailIcon, PhoneIcon, WppIcon } from '../../Icons/Icons'

const About = () => {
  const [t] = useTranslation('global')

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
            <p id="home-text">{t('homeText')}</p>
            <p id="home-secondText">{t('homeSecondText')}</p>
          </div>
        </div>
        <div className="row">
          <div className="sobre-pestañas">
            <div className="section-title">
              <h2 id="skills-data" value={t('skillsData')}>Skills</h2>
              <p className="section-subtitle-p" id="skills-subTitle">{t('skillsSubtitle')}</p>
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