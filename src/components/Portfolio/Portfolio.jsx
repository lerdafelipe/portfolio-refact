import { useTranslation } from "react-i18next"
import PortfolioCard from "../PortfolioCard/PortfolioCard"
import './Portfolio.css'
import img1 from '../../assets/portfolio/thumb/project-2.png'
import img2 from '../../assets/portfolio/thumb/project-3.png'
import img3 from '../../assets/portfolio/thumb/project-9.png'
import img4 from '../../assets/portfolio/thumb/project-6.png'

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

        <PortfolioCard description={t('firstProject')} img={img1} title={t('titleFirstProject')} />
        <PortfolioCard description={t('secondProject')} img={img2} title={t('titleSecondProject')} />
				<PortfolioCard description={t('thirdProject')} img={img3} title={t('titleThirdProject')} />
				<PortfolioCard description={t('fourthProject')} img={img4} title={t('titleFourthProject')} />

      </div>

		</div>
	</section>
  )
}

export default Portfolio
