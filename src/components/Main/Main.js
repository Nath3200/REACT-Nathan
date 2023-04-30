// le <> remplace une div sauf qu elle est vide

import React from 'react'
// import profil from "../../assets/img/profil.png"
import photo from "../../assets/img/photo cv.jpg"
import design from "../../assets/img/design.png"
import integration from "../../assets/img/integration.png"
import dev from "../../assets/img/dev.png"
import seo from "../../assets/img/seo.png"

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
  return (
    		<main>
			<div className="conteneur flex-main">
				<section id="presentation">
					<h2>Présentation</h2>
					<div className="profil-flex">
						<img src={photo} title={props.name}alt={props.name}/>
						<p>Diplomé d une Licence d'Economie et Gestion des Firmes et actuellement en Formation Webschool Developer Full Stack, mes competences vont de l'aspect Commercial-Relationnel au Developpement-Integration Web via HTML/CSS, JavaScript et REACT. <br />
						Mes principes fondamentaux sont Rigueurs et Dynamisme, j ai une grande soif d apprendre a vos cotes et apporter toutes mes competences a votre service. </p>
					</div>
					<div className="mise-en-avant">

						<CardPointFort title="Design" img={design} alt={"Design"} figcaption={"J aime le design"} />
						<CardPointFort title="Front-end development" img={integration} alt={"Design"} figcaption={"J aime le front-end "} />
						<CardPointFort title="Back-end development" img={dev} alt={"Design"} figcaption={"J aime le back-end "} />
						<CardPointFort title="SEO" img={seo} alt={"Design"} figcaption={"J aime le management"} />
					
					</div>
				</section>
				<aside>
					<div className="encart">
						<h3>Qui suis-je ?</h3>
						<p>Jeune actif et dynamique pret a apporter ma plus-value a votre entreprise.  </p>
					</div>
					<div className="encart">
						<h3>Experiences</h3>
						<ul>
							<li>Community Manager - <br />Publicité, Prospection et Proposition de service sur plateforme de dons.<br /> CharityClic.com</li><br />
							<li>Responsable Commercial - <br />Assistance Technique, Relation/Clients, Ventes et Fidelisation <br /> Annatel</li><br />
							<li>Ingenieur Commercial - <br />Qualifeur PABX, prise de renseignements aupres des gerants pour leur fournir un service telephonie adaptee a leur besoin en partenariat avec Orange.<br /> Business Services</li>
						</ul>
					</div>
					<div className="encart">
						<h3>Contact</h3>
				
							<label htmlFor="prenom">Prenom</label>
							<input type="text" id="prenom" name="prenom"/> <hr />
							<label htmlFor="nom">Nom</label>
							<input type="text" id="nom" name="nom"/><hr />
							<label htmlFor="email">Email</label>
							<input type="text" id="email" name="email"/><hr />
							<label htmlFor="message"></label>
							<textarea placeholder="Ecrire un message" id="message" name="message"/> <hr />
							<input type="submit" onClick={()=> props.HandleName("test")}/>
						
					</div>
				</aside>
			</div>
		</main>
  )
}

export default Main