import { useTranslation } from 'react-i18next'
import './Footer.css'

const Footer = () => {
	const { t } = useTranslation('global')

  return (
    <section className="section active">
		<div className="container">
			<div className="row foot">
				<div className="section-title">
					<span>© 2022 Felipe Lerda</span>
					<span><a target="_blank" rel="noreferrer" id="privacy-policy" href="/privacy-policy.html">{t('polits')}</a></span>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Footer
