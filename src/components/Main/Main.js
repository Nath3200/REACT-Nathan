// le <> remplace une div sauf qu elle est vide

import React from 'react'
// import profil from "../../assets/img/profil.png"
import photo from "../../assets/img/photo cv.jpg"
import design from "../../assets/img/design.png"
import integration from "../../assets/img/integration.png"
import dev from "../../assets/img/dev.png"
import seo from "../../assets/img/seo.png"
import { useTranslation } from 'react-i18next'

const CardPointFort = (props) => {
	console.log("props depuis CardPointFort",props)

  return(
	<>	
	  <figure>
	     <h4>{props.title}</h4>
	     <img src={props.img} title="Catégorie : graphisme" alt="Design"/>
	     <figcaption>{props.figcaption}</figcaption>
      </figure>
	</>
	)
}

const Main = (props) => {
	console.log("props",props)

const {t} = useTranslation()
	
  return (
    		<main>
			<div className="conteneur flex-main">
				<section id="presentation">
					<h2>Presentation</h2>
					<div className="profil-flex">
						<img src={photo} title={props.name}alt={props.name}/>
						<p>{t("CV.diplome")} <br />
						{t("CV.principes")} </p>
					</div>
					<div className="mise-en-avant">

						<CardPointFort title="Design" img={design} alt={"Design"} figcaption={t("CV.design")} />
						<CardPointFort title="Front-end development" img={integration} alt={"Design"} figcaption={t("CV.front")} />
						<CardPointFort title="Back-end development" img={dev} alt={"Design"} figcaption={t("CV.back")} />
						<CardPointFort title="SEO" img={seo} alt={"Design"} figcaption={t("CV.seo")}/>
					
					</div>
				</section>
				<aside>
					<div className="encart">
						<h3>{t("CV.qui")}</h3>
						<p>{t("CV.description")}</p>
					</div>
					<div className="encart">
						<h3>Experiences</h3>
						<ul>
							<li>Community Manager - <br />{t("CV.job1")}<br /> CharityClic.com</li><br />
							<li>{t("CV.title_job2")} - <br />{t("CV.job2")} <br /> Annatel</li><br />
							<li>{t("CV.title_job3")} - <br />{t("CV.job3")}<br /> Business Services</li>
						</ul>
					</div>
					<div className="encart">
						<h3>Contact</h3>
				
							<label htmlFor="prenom">{t("CV.prenom")}</label>
							<input type="text" id="prenom" name="prenom"/> <hr />
							<label htmlFor="nom">{t("CV.nom")}</label>
							<input type="text" id="nom" name="nom"/><hr />
							<label htmlFor="email">Email</label>
							<input type="text" id="email" name="email"/><hr />
							<label htmlFor="message"></label>
							<textarea placeholder={t("CV.message")} id="message" name="message"/> <hr />
							{/* <button type='submit' onClick={()=> props.HandleName("test")}>{t("CV.envoyer")}</button>   */}
							<a href="https://wa.me/972555646247?text=I'm%20interested%20in%20your%20car%20for%20sale" target="_blank" rel="noopener noreferrer"><button type='submit' classname='watsapp'>  Contact Whatsapp</button>  </a>
							
						
					</div>
				</aside>
			</div>
		</main>
  )
}

export default Main