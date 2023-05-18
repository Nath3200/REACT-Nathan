// uef pour useEffect((=>{})) sert a gerer les cycles de vie des components
// usf pour useState sert a stocker les valeurs
// key pour revenir en arriere dans le .map

import React, {useEffect, useState} from 'react'
import './Blog.css'
// import Layout from '../../components/Layout/Layout'
import Introduction from '../../components/Introduction/Introduction';
import Lien from '../../components/Lien/Lien';
import axios  from 'axios';
import { Link } from 'react-router-dom';
import i18n from '../../i18n/config';
import { useTranslation } from 'react-i18next';

const Blog = () => {

  const [name, setName] = useState("Nathan Guedj");
        // let name = "nathan guedj"
        // cb = callback
        const HandleName = (cb)=>{ //importer test du l enfant
           setName(cb)
        }

  // const [activeFooter, setActiveFooter]= useState(false);
  
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState();
  // const HandleFooter = () => {setActiveFooter(!activeFooter)
  // }

  const [valueInput, setvalueInput] = useState("");
  const [Resultat, setResultat] = useState([]);

    const handleInput = (e) => {
      console.log("fonction ouverte")
      const valueRecherche = e.target.value
      console.log("valueRecherche", valueRecherche)
      setvalueInput(valueRecherche)

      const resultFilter = data.filter(user => user.data.toLocaleLowerCase().includes(valueRecherche))
      console.log("resultFilter", resultFilter)
      setResultat(resultFilter)
    }

  const {t} = useTranslation();

useEffect(() => {
  console.log("mon blog est monte");
  axios.get('https://sabik-547abb.appdrag.site/api/getAllBlog', {
  params: {
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
  console.log(response.data.Table);
  setData(response.data.Table);
});
}, []);

useEffect(() => {
  const handleChangeLanguage = () => {
    // La langue a changé, faites quelque chose ici...
    console.log('La langue a changé ! Nouvelle langue :', i18n.language);
    setLanguage(i18n.language)
  };
  
  i18n.on('languageChanged', handleChangeLanguage);

  // Nettoyage : supprime l'écouteur d'événement lorsque le composant est démonté
  return () => {
    i18n.off('languageChanged', handleChangeLanguage);
  };
}, [i18n]);

useEffect(() => {
  console.log("language",language)
}, []);

  return (
    <>
    <header className='blog'>
            <Introduction name={name}/>

			<Lien/>

	  </header>

    <h1>{t("Blog.h1")}</h1>

    <div>
      <input type="text" value={valueInput} onChange={handleInput} />
      {Resultat.length >0 ? (
        <div>
          <h6>Resultat de la recherche</h6>
          <div>{Resultat.map(user=>(
            <div key={user.id}>
            {user.data} 
            </div>
          ))}
          </div>
        </div>
      ) : 
      (
        <div>Aucun resultat</div>
      )}
    </div>

    {
     data && data.map((row)=>(
      
      <div  className='bg-secondary shadow-lg rounded m-3 p-3'>
          <h2>{language==="fr" ?  row.title : row.titleEN && language==="en" ?  row.titleEN : row.title }</h2>
          <Link key={row.id}className="text-decoration-none text-dark" to={`/article/${row.id}`}>
            <img src={row.image} className='img-fluid'></img>
          </Link>
          <p>{language==="fr" ? row.article : row.articleEN && language==="en" ?  row.articleEN : row.article}</p>
          <p>{row.auteur}</p>
      </div>
      
  ))
    }
    
    {/* <Layout footer={activeFooter}>

       <div>Hello Blog</div>
       <button onClick={() => HandleFooter()}>active footer</button>

    </Layout> */}
    </>
  )
}

export default Blog