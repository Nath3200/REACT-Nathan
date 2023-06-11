import React, { useEffect, useState } from "react";
import "./Projet.css";
import Introduction from "../../components/Introduction/Introduction";
import Lien from "../../components/Lien/Lien";
import axios from "axios";
// import Pacman from "../../assets/img/Pacman.jpg";
// import Mode from "../../assets/img/mode.jpg";
// import Work from "../../assets/img/work-in-progress.png";
import { useTranslation } from "react-i18next";
import UseDocumentTitle from "../../components/UseCustoms/UseDocumentTitle";
import { useSelector } from "react-redux";
import { getPseudo } from "../../redux/slices/auth.slice"
import {getDarkMode} from "../../redux/slices/darkmode.slice"

const Projet = () => {
  const [name, setName] = useState("Nathan Guedj");

  // let name = "nathan guedj"
  // cb = callback
  // const HandleName = (cb) => {
  //   //importer test du l enfant
  //   setName(cb);
  // };

  const { t } = useTranslation();

  const GETPSEUDO = useSelector(getPseudo)

  const [data, setData] = useState();
  const [stockData, setstockData] = useState();

  const GETDARKMODE = useSelector(getDarkMode)

  UseDocumentTitle("Nathan Guedj's Projects")

  useEffect(() => {
    axios
      .get("https://sabik-547abb.appdrag.site/api/getAllProjects", {
        params: {
          AD_PageNbr: "1",
          AD_PageSize: "500",
        },
      })
      .then(function (response) {
        console.log(response.data.Table);
        setData(response.data.Table)
        setstockData(response.data.Table) // on ne touchera jamais cette Data
      });
  }, []);
 
  const handleClick = (argu) => {
    const filterProjet = stockData?.filter((projet)=>  ( projet.categorie === argu  ))
    console.log("filterProjet", filterProjet);
    setData(filterProjet)
  };

  return (
    <div style={{
      backgroundColor : GETDARKMODE === true ? "black": "white",
      color:GETDARKMODE == true ? "white": "",
      }}>
      <header className="pro">
        <Introduction name={name} />

        <Lien />
      </header>
      <br />
      <br />
      <div className="projet">
        <h1>{t("Portfolio.title")}</h1>
        <h1> {GETPSEUDO}</h1>
      </div>
      {/* Voici mes Projets */}
      <div className="language">
        <button className="btn btn-outline-dark" onClick={() => handleClick("html")} >
          <span className ={`text-${GETDARKMODE=== true ? "light":"dark"}`}>
            HTML/CSS 
          </span>
        </button>
        <button className="btn btn-outline-dark" onClick={() => handleClick("javascript")}>
          <span className ={`text-${GETDARKMODE=== true ? "light":"dark"}`}>
            JAVASCRIPT
          </span>
        </button>
        <button className="btn btn-outline-dark" onClick={() => handleClick("react")}>
          <span className ={`text-${GETDARKMODE=== true ? "light":"dark"}`}>
            REACT
          </span>
        </button>
      </div>
      {
     data && data.map((row)=>(
      <div key={row.id} className='container bg-secondary shadow-lg rounded m-3 p-3'>
          <h2>{row.title}</h2>
          <a className="link" href={row.lien} target="_blank" rel="noopener noreferrer">{row.lien?"Lien":""}</a>
          <img className="pacman" src={row.image}></img>
          <p className="article">{row.article}</p>
          {/* <p>{row.categorie}</p>        */}
      </div>
  ))
    }
      {/* <article className="container">
        <h2>{t("Portfolio.title1")}</h2>
        <img
          className="pacman"
          src={Pacman}
          title="Catch me if you Can"
          alt="Pacman"
        />
        <br />
        <br />
        <p className="jeu">
          <a href="https://main--peppy-centaur-0b834a.netlify.app/">
            {t("Portfolio.link1")}
          </a>
          <br />
          {t("Portfolio.article1")}
        </p>
      </article>{" "}
      <br />
      <article className="container">
        <h2>{t("Portfolio.title2")}</h2>
        <img className="work" src={Work} alt="Work in progress" />
        <br />
        <img
          className="mode"
          src={Mode}
          title="WebShop Mode_26"
          alt="WebShop Mode_26"
        />
        <p className="jeu">{t("Portfolio.article2")}</p>
      </article> */}
    </div>
  );
};

export default Projet;