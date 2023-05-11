import './PortfolioCard.css'

const PortfolioCard = ({description, title, img}) => {
  return (
    <div className="portfolio-item">
			<div className="portfolio-item-inner outer-shadow">
				<div className="portfolio-item-img">
					<img src={img} alt="Portfolio personal"/>
				</div>
				<p id="p-second-project" className="portfolio-item-short-descr">{description}</p>
				<p className="portfolio-item-title">{title}</p>
			</div>
		</div>
  )
}

export default PortfolioCard
