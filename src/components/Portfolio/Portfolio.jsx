import PortfolioCard from "../PortfolioCard/PortfolioCard"
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className="portfolio-section section active" id="portfolio">
		<div className="container">
			<div className="row">
				<div className="section-title">
					<h2  id="portfolio-title" value="Portfolio">Algunos trabajos</h2>
					<p id="portfolio-subtitle" className="section-subtitle-p">*Clickeando en el proyecto, si aún existe, lo podrás ver.</p>
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
