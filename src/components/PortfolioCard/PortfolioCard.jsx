import './PortfolioCard.css'

const PortfolioCard = () => {
  return (
    <div className="portfolio-item">
			<div className="portfolio-item-inner outer-shadow">
				<div className="portfolio-item-img">
					<img src="img/portfolio/thumb/project-3.png" alt="Portfolio personal"/>
				</div>
				<p id="p-second-project" className="portfolio-item-short-descr">Short description about the project.</p>
				<p className="portfolio-item-title">Poselar</p>
			</div>
		</div>
  )
}

export default PortfolioCard
