// rafce pour obtenir importer le ficher aU REACT. Cela donne ici :de import a Introduction, la div est a specifier nous meme

import React, { useState } from 'react'
import "./Introduction.css"
import { useTranslation } from 'react-i18next';
import cvdev from "../../assets/img/cv_dev.png"

const Introduction = ({name}) => {
const [changeColor, setChangecolor]= useState("red");

const {t} = useTranslation()

  return (
    <div className="conteneur">
				<div className="normal-flex">
					<div className="haut-gauche">
						<h1 className={`text-${changeColor}`} 
						// onClick={()=> setChangecolor("blue")}
						>Nathan Guedj</h1>
						{/* {name} */}
						<strong>Communication</strong> /
						<strong>Marketing</strong> /
						<strong>Digital</strong>
					</div>
					<div className="haut-droit">
						
						<a href={cvdev} download>{t("CV.href")}</a>
					</div>
				</div>
			</div> 
  )
}

export default Introduction