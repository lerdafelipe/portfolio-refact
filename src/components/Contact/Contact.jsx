/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next'
import { IgIcon, LinkedinIcon, LocationIcon, MailIcon, PhoneIcon, TwIcon } from '../../Icons/Icons'
import './Contact.css'


const Contact = () => {
  const { t } = useTranslation('global')

  return (
    <section className="contact-section section active" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 id="contact-title" value={t('contactData')}>{t('contactTitle')}</h2>
          </div>
        </div>
        <div className="row">

          <ContactItem text={'+39 351 527 1160'} social={t('phoneTitle')} Icon={PhoneIcon} />

          <ContactItem text={'lerdafelipe@gmail.com'} social={'Email'} Icon={MailIcon} />

          <ContactItem text={'Italia'} social={t('loactionTitle')} Icon={LocationIcon} />

          <ContactItem text={'@lerdafelipe'} social={'Instagram'} Icon={IgIcon} />

          <ContactItem text={'/in/lerdafelipe'} social={'Linkedin'} Icon={LinkedinIcon} />
          
          <ContactItem text={'@lerdafelipe'} social={'Twitter'} Icon={TwIcon} />

        </div>
			</div>
    </section>
  )
}

export default Contact

const ContactItem = ({text, social, Icon}) => {
  return(
    <div className="contact-item">
      <div className="contact-item-inner outer-shadow">
      {Icon && <Icon />}
      <span>{social}</span>
      <p>{text}</p>
      </div>
   </div>
  )
}
