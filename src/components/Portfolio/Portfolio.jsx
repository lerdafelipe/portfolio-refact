import { useTranslation } from "react-i18next"
import PortfolioCard from "../PortfolioCard/PortfolioCard"
import './Portfolio.css'

const Portfolio = () => {
	const {t} = useTranslation('global')

  return (
    <section className="portfolio-section section active" id="portfolio">
		<div className="container">
			<div className="row">
				<div className="section-title">
					<h2  id="portfolio-title" value="Portfolio">{t('portfolioTitle')}</h2>
					<p id="portfolio-subtitle" className="section-subtitle-p">{t('portfolioSubtitle')}</p>
				</div>
			</div>
			<div className="row portfolio-items">

        <PortfolioCard />
        <PortfolioCard />

      </div>

		</div>
	</section>
  )
}

export default Portfolio
