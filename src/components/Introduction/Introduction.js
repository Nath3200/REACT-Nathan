// rafce pour obtenir importer le ficher aU REACT. Cela donne ici :de import a Introduction, la div est a specifier nous meme


import React, { useState } from 'react'
import "./Introduction.css"

const Introduction = ({name}) => {
const [changeColor, setChangecolor]= useState("red");

  return (
    <div className="conteneur">
				<div className="normal-flex">
					<div className="haut-gauche">
						<h1 className={`text-${changeColor}`} onClick={()=> setChangecolor("blue")}>{name}</h1>
						<strong>Communication</strong> /
						<strong>Marketing</strong> /
						<strong>Digital</strong>
					</div>
					<div className="haut-droit">
						<a href="/cv">Télécharger mon c.v.</a>
					</div>
				</div>
			</div> 
  )
}

export default Introduction