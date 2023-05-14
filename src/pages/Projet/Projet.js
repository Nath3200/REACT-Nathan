import React, {useEffect,useState} from 'react'
import './Projet.css'
import Introduction from '../../components/Introduction/Introduction'
import Lien from '../../components/Lien/Lien'
// import axios from 'axios'
import Pacman from '../../assets/img/Pacman.jpg'
import Mode from '../../assets/img/mode.jpg'
import Work from '../../assets/img/work-in-progress.png'
import { useTranslation } from 'react-i18next'

const Projet = () => {

        const [name, setName] = useState("Nathan Guedj");
        // let name = "nathan guedj"
        // cb = callback
        const HandleName = (cb)=>{ //importer test du l enfant
          setName(cb)
        }
        const {t} = useTranslation()

// const [data, setData] = useState();

// useEffect(() => {

// axios.get('https://sabik-547abb.appdrag.site/api/getAllProjects', {
//   params: {
//     "AD_PageNbr" : "1",
//     "AD_PageSize" : "500"
//   }
// }).then(function(response){
//   console.log(response.data);
//   setData(response.data.Table);
// });
// }, []);

  return (
    <div>
      <header className='pro'>
            <Introduction name={name}/>

			<Lien/>

	  </header>
      <br /><br />
       <div className='projet'><h1>{t("Portfolio.title")}</h1></div>
       {/* Voici mes Projets */}

       {/* {
     data && data.map((row)=>(
      <div key={row.id} className='bg-secondary shadow-lg rounded m-3 p-3'>
          <h2>{row.title}</h2>
          <a>{row.lien}</a>
          <img src={row.image}></img>
          <p>{row.article}</p>        
      </div>
  ))
    } */}

        <article className='container'>  
        <h2>{t("Portfolio.title1")}</h2>
        <img className='pacman' src={Pacman} title="Catch me if you Can" alt="Pacman"/>
         <br /><br />   
        <p className='jeu'><a href='https://main--peppy-centaur-0b834a.netlify.app/'>{t("Portfolio.link1")}</a><br />
           {t("Portfolio.article1")}
        </p>
       </article> <br />
       <article className='container'>
         <h2>{t("Portfolio.title2")}</h2><img className='work' src={Work}  alt="Work in progress" /><br />
         <img className='mode' src={Mode} title="WebShop Mode_26" alt="WebShop Mode_26" />
         <p className='jeu'>
           {t("Portfolio.article2")}
        </p>
       </article>
    </div>
  )
}

export default Projet