// le <> remplace une div sauf qu elle est vide

import React from 'react'
import profil from "../../assets/img/profil.png"
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
	     <img src={design} title="Catégorie : graphisme" alt="Design"/>
	     <figcaption>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</figcaption>
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
						<img src={profil} title="Photo de Prénom Nom" alt="Prénom Nom"/>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam totam corporis doloremque doloribus fugit, voluptatibus nobis repellat libero incidunt temporibus provident earum dolorem. Numquam, libero et ratione deleniti ipsa veritatis.</p>
					</div>
					<div className="mise-en-avant">

						<CardPointFort title="Design" img={design} alt={"Design"} figcaption={"Lorem ipsum dolor, sit amet "} />
						<CardPointFort title="Front-end development" img={integration} alt={"Design"} figcaption={"Lorem ipsum dolor, sit amet "} />
						<CardPointFort title="Back-end development" img={dev} alt={"Design"} figcaption={"Lorem ipsum dolor, sit amet "} />
						<CardPointFort title="SEO" img={seo} alt={"Design"} figcaption={"Lorem ipsum dolor, sit amet "} />
					
					</div>
				</section>
				<aside>
					<div className="encart">
						<h3>Qui suis-je ?</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
					</div>
					<div className="encart">
						<h3>Experience</h3>
						<ul>
							<li>Experience 1</li>
							<li>Experience 2</li>
							<li>Experience 3</li>
						</ul>
					</div>
					<div className="encart">
						<h3>Contact</h3>
				
							<label htmlFor="prenom">Prenom</label>
							<input type="text" id="prenom" name="prenom"/> <hr />

							<label htmlFor="nom">Prenom</label>
							<input type="text" id="nom" name="nom"/>
<br /><br />
							<label htmlFor="email">Prenom</label>
							<input type="text" id="email" name="email"/>

							<label htmlFor="message">Prenom</label>
							<textarea placeholder="Ecrire un message" id="message" name="message"/>
								<input type="submit" onClick={()=> props.HandleName("test")}/>
						
					</div>
				</aside>
			</div>
		</main>
  )
}

export default Main