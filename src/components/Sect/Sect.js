import React from 'react'
import responsiv from "../../assets/img/responsive.png"
import { useTranslation } from 'react-i18next'

const Sect = () => {
	
	const {t} = useTranslation()

  return (
    <section id="slider">
			<div className="conteneur flex-slider">
				<figure id="milieu-haut-gauche">
					<a>
						<img src={responsiv} alt="Relou qui represente plusieurs écrans pour le responsive" title="Responsive design"/>
					</a>
					<figcaption>
						<a>{t("CV.a")}</a>
					</figcaption>
				</figure>
				<div id="milieu-haut-droit">
					<h2>{t("CV.title")}</h2>
					<p>{t("CV.p1")}</p>
					<p>{t("CV.p2")}</p>
				</div>
			</div>
		</section>
  )
}

export default Sect