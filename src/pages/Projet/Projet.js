import React, {useState} from 'react'
import './Projet.css'
import Introduction from '../../components/Introduction/Introduction'
import Lien from '../../components/Lien/Lien'
import Pacman from '../../assets/img/Pacman.jpg'
import Mode from '../../assets/img/mode.jpg'
import Work from '../../assets/img/work-in-progress.png'

const Projet = () => {

        const [name, setName] = useState("Nathan Guedj");
        // let name = "nathan guedj"
        // cb = callback
        const HandleName = (cb)=>{ //importer test du l enfant
           setName(cb)
        }
  return (
    <div>
      <header className='pro'>
            <Introduction name={name}/>

			<Lien/>

	  </header>
      <br /><br />
       <h1 className='projet'>Voici mes Projets</h1>

        <article className='container'>  
        <h2>Catch me if you Can</h2>
        <img className='pacman' src={Pacman} title="Catch me if you Can" alt="Pacman"/>
         <br /><br />   
        <p className='jeu'><a href='https://main--peppy-centaur-0b834a.netlify.app/'>Lien pour jouer</a><br />
           Ce jeu video a ete realise avec les langages JavaScript et HTML/CSS.
           Stocker dans une memoire JSON, ce jeu est interactif puisque le score des meilleurs joueurs est actualisée.
           L'objectif est d attrapper le bouton sauvage avant qu'il n'y s'echappe.
           Cependant, celui-ci n est pas content lorsqu'il est attrape. C'est pourquoi au fur et a mesure que vous passez les niveau, il devient difficile de l'attraper et le bouton devient incontrolable.
        </p>
       </article> <br />
       <article className='container'>
         <h2>Mode_26.com</h2><img className='work' src={Work}  alt="Work in progress" /><br />
         <img className='mode' src={Mode} title="WebShop Mode_26" alt="WebShop Mode_26" />
         <p className='jeu'>
           La marque Mode_26 issu du Sud de la France debarque tres prochainement sur le e-commerce. <br />Importé des marchés provencaux, notre style Chic&Boheme saura vous emerveiller tant au niveau du design que de la qualité des produits. Robes, jupes, pantalon, T-Shirt et encore plus vous attendent bientot sur notre site. <br />Dedié aux femmes, vous pourrez vous faire plaisir avec des matieres de qualité ainsi qu'a des prix raisonnables.
        </p>
       </article>
    </div>
  )
}

export default Projet