// uef pour useEffect((=>{})) sert a gerer les cycles de vie des components
// usf pour useState sert a stocker les valeurs
// key pour revenir en arriere dans le .map

import React, {useEffect, useState} from 'react'
import './Blog.css'
// import Layout from '../../components/Layout/Layout'
import Introduction from '../../components/Introduction/Introduction';
import Lien from '../../components/Lien/Lien';
import axios  from 'axios';
import { Link, useFetcher } from 'react-router-dom';
import i18n from '../../i18n/config';
import { useTranslation } from 'react-i18next';
import UseDocumentTitle from '../../components/UseCustoms/UseDocumentTitle';
import UseFetch from '../../components/UseCustoms/UseFetch';
import UseWindowSize from '../../components/UseCustoms/UseResize';
import { useDispatch, useSelector } from 'react-redux';
import {setArticles, getArticles, setArticleSelected} from "../../redux/slices/blog.slice"
import {getDarkMode} from "../../redux/slices/darkmode.slice"

const Blog = () => {

  const [name, setName] = useState("Nathan Guedj");
        // let name = "nathan guedj"
        // cb = callback
        const HandleName = (cb)=>{ 
           setName(cb)
           //importer test du l enfant
        }

  const [data, setData] = useState([]);
  const [language, setLanguage] = useState();
  // const [activeFooter, setActiveFooter]= useState(false);
  // const HandleFooter = () => {setActiveFooter(!activeFooter)
  // }

  const [valueInput, setvalueInput] = useState("");
  const [Resultat, setResultat] = useState([]);

  const dispatch = useDispatch()

  UseDocumentTitle("Nathan Guedj's Blog");
 // const resize = UseWindowSize();
 // console.log(resize);

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
  // il faut vider toutes les variables
  // il faut loader
  axios.get('https://sabik-547abb.appdrag.site/api/getAllBlog', {
  params: {
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
  console.log(response.data.Table);
  setData(response.data.Table);
}).catch(error=>{console.log(error)});
}, []);

const {Data, Loading, Error} = UseFetch('https://sabik-547abb.appdrag.site/api/getAllBlog')
dispatch(setArticles(data))

const GETARTICLES = useSelector(getArticles)
//const GETDARKMODE = useSelector((state)=> state.darkmode.isDarkMode)
const GETDARKMODE = useSelector(getDarkMode)
//console.log("GETDARKMODE==>",GETDARKMODE)
useEffect(() => {
  console.log("GETDARKMODE",GETDARKMODE)
}, [GETDARKMODE]);
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
    <div style={{
      backgroundColor : GETDARKMODE === true ? "black": "white",
      color:GETDARKMODE == true ? "white": "",
      }}>
    <header className='blog'>
            <Introduction name={name}/>

			<Lien/>

	  </header>

    <h1 className=' shadow-lg rounded m-3 p-3' style={{
        backgroundColor : GETDARKMODE === true ? "black": "white",
        color:GETDARKMODE == true ? "white": "",
        }}>{t("Blog.h1")}</h1>

    {/* <div>
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
    </div> */}

    {
    //  data && data
     GETARTICLES?.map((row)=>(
      
      <div key={row.id} onClick={() => {
        dispatch(setArticleSelected(row.id))
      }} className=' shadow-lg rounded m-3 p-3' style={{
        backgroundColor : GETDARKMODE === true ? "black": "white",
        color:GETDARKMODE == true ? "white": "",
        }}>
          <h2>{language==="fr" ?  row.title : row.titleEN && language==="en" ?  row.titleEN : row.title }</h2>
          <Link key={row.id}className="text-decoration-none text-dark" to={`/article/${row.id}`}></Link>              
          
      <img src={row.image} height={30} className='img-fluid border border-danger'/>
      
      <span>{language==="fr" ? row.article : row.articleEN && language==="en" ?  row.articleEN : row.article}</span>

          {/* <p>{row.auteur}</p> */}
      </div>      
  ))
    
    }
    {/* {Error && <p>Error</p>}
    {Loading && <p>Loading</p>}
    {Error && <p>Error</p>} */}
    <Link to="/">
      <button className='btn btn-primary'>Retourner a la âge d accueil</button>
    </Link>
    
    {/* <Layout footer={activeFooter}>

       <div>Hello Blog</div>
       <button onClick={() => HandleFooter()}>active footer</button>

    </Layout> */}
    </div>
  )
}

export default Blog