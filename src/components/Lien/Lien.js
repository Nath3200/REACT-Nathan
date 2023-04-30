import React from 'react'
import "./Lien.css"
import { Link } from 'react-router-dom'
import {Dropdown} from "react-bootstrap"

const Lien = () => {

  // const changeColor= () => {
  //   const element = document.getElementsByClassName("flex-menu")[0]
  //   console.log("element", element)
  //   element.style.border = "2px blue solid"
  // }

  return (
    <nav>
    <div className="conteneur">
        <div className="flex-menu" >
          {/* onMouseOver={()=> changeColor()} */}
            <Link to="/Projet">Portfolio</Link>
            <Link to="/cv">C.V</Link>
            <Link to="/blog">Blog</Link>

            {/* <Link to="/contact">Contact</Link> */}
            {/* <Link to="/Counter">Counter</Link>
            <Link to="/List">List</Link>
            <Link to="/Toogle">Toogle</Link>
            <Link to="/Metier">Metier</Link> */}

            <Dropdown>
              {/* le Dropdown est une fenetre comprenant des composants, son style ici est issu de Bootstrap */}
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              DROPDOWN
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/UseEffectCompo" >UseEffect</Dropdown.Item>
              <Dropdown.Item as={Link} to="/Counter">Counter</Dropdown.Item>
              <Dropdown.Item as={Link} to="/list">List</Dropdown.Item>
              <Dropdown.Item as={Link} to="/Toogle"> Toogle</Dropdown.Item>
              <Dropdown.Item as={Link} to="/Metier"> Metier</Dropdown.Item>
              <Dropdown.Item as={Link} to="/SetIntervalCompo"> SetIntervalCompo</Dropdown.Item>
              <Dropdown.Item as={Link} to="/MouseMoove"> MouseMoove</Dropdown.Item>

              <Dropdown.Item as={Link} to="/PageUne"> PageUne</Dropdown.Item>
              <Dropdown.Item as={Link} to="/AddArticle"> AddArticle</Dropdown.Item>
              <Dropdown.Item as={Link} to="/ApiGeneral"> ApiGeneral</Dropdown.Item>
              <Dropdown.Item as={Link} to="/AxiosGet"> AxiosGet</Dropdown.Item>
              <Dropdown.Item as={Link} to="/AxiosPost"> AxiosPost</Dropdown.Item>
              <Dropdown.Item as={Link} to="/DeleteArticle"> DeleteArticle</Dropdown.Item>
              <Dropdown.Item as={Link} to="/GetArticle"> GetArticle</Dropdown.Item>
              <Dropdown.Item as={Link} to="/GetArticleById"> GetArticleById</Dropdown.Item>
              <Dropdown.Item as={Link} to="/LinkExplication"> LinkExplication</Dropdown.Item>
              <Dropdown.Item as={Link} to="/RouteDyn"> RouteDyn</Dropdown.Item>
              <Dropdown.Item as={Link} to="/RouterGeneral"> RouterGeneral</Dropdown.Item>
              <Dropdown.Item as={Link} to="/StyleBackTik"> StyleBackTik</Dropdown.Item>
              <Dropdown.Item as={Link} to="/StyleFonction"> StyleFonction</Dropdown.Item>
              <Dropdown.Item as={Link} to="/StyleGeneral"> StyleGeneral</Dropdown.Item>
              <Dropdown.Item as={Link} to="/StyleSepare"> StyleSepare</Dropdown.Item>
              <Dropdown.Item as={Link} to="/UseLocation"> UseLocation</Dropdown.Item>

            </Dropdown.Menu>
            
          </Dropdown>      
            {/* <Link><button className='btn btn-danger'/>Click</Link> */}
        </div>
    </div>
</nav>
  )
}

export default Lien