import React,{useEffect, useState} from 'react';
// useEffect sert a declencher une fonction
// useState sert a stocker une fonction
import "./Lien.css"
import { Link } from 'react-router-dom'
import {Dropdown} from "react-bootstrap"
import DropI18N from '../DropI18N/DropI18N'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom';

const Lien = () => {

  const [isAuth, setIsAuth] = useState(false);

  let location = useLocation()
  console.log("location", location.pathname)

  const {t} = useTranslation()

  useEffect(() => {
  if (localStorage.getItem("tokenBlog")) {
    console.log("localstorage plein je suis auth")
    setIsAuth(true)
  }else{
    console.log("je ne suis pas auth")
    setIsAuth(false)}  
}, []);

  

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
            <Link to="/Projet"><span className ={`${location.pathname === "/Projet" ? "fw-bold" : ""}`}>Portfolio</span> </Link>
            <Link to="/cv"><span className ={`${location.pathname === "/cv" ? "fw-bold" : ""}`}>C.V</span></Link>
            <DropI18N/>
            <Link to="/blog"><span className ={`${location.pathname === "/blog" ? "fw-bold" : ""}`}>Blog</span> 
            </Link>
            <Link to="/login">{t("nav.login")}</Link>

            {/* <Link to="/contact">Contact</Link> */}
            {/* <Link to="/Counter">Counter</Link>
            <Link to="/List">List</Link>
            <Link to="/Toogle">Toogle</Link>
            <Link to="/Metier">Metier</Link> */}

              {
                isAuth && 
                
                <Link as={Link} onClick= {() => {
                    localStorage.setItem("tokenBlog","")
                    // .setItem permet de vider le tokenBlog
                    window.location.reload()
                    // window.location.reload() permet de rafraichir la page automatiquement.
                  }} >Logout</Link> }
                  
            <Dropdown>
              {/* le Dropdown est une fenetre comprenant des composants, son style ici est issu de Bootstrap */}
            <Dropdown.Toggle variant="dark" id="dropdown-basic">DROPDOWN</Dropdown.Toggle>
                         
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/UseEffectCompo" >UseEffect</Dropdown.Item>
              <Dropdown.Item as={Link} to="/Counter">Counter</Dropdown.Item>
              <Dropdown.Item as={Link} to="/list">List</Dropdown.Item>
              <Dropdown.Item as={Link} to="/Toogle"> Toogle</Dropdown.Item>
              <Dropdown.Item as={Link} to="/Metier"> Metier</Dropdown.Item>
              <Dropdown.Item as={Link} to="/SetIntervalCompo"> SetIntervalCompo</Dropdown.Item>
              <Dropdown.Item as={Link} to="/MouseMoove"> MouseMoove</Dropdown.Item>

              <Dropdown.Item as={Link} to="/PageUne"> PageUne</Dropdown.Item>            
              <Dropdown.Item as={Link} to="/ApiGeneral"> ApiGeneral</Dropdown.Item>
              <Dropdown.Item as={Link} to="/AxiosGet"> AxiosGet</Dropdown.Item>
              <Dropdown.Item as={Link} to="/AxiosPost"> AxiosPost</Dropdown.Item>           
              <Dropdown.Item as={Link} to="/GetArticleById"> GetArticleById</Dropdown.Item>
              <Dropdown.Item as={Link} to="/GetArticle"> GetArticle</Dropdown.Item>

              {/* <Dropdown.Item as={Link} to="/LinkExplication"> LinkExplication</Dropdown.Item>
              <Dropdown.Item as={Link} to="/RouteDyn"> RouteDyn</Dropdown.Item>
              <Dropdown.Item as={Link} to="/RouterGeneral"> RouterGeneral</Dropdown.Item>
              <Dropdown.Item as={Link} to="/StyleBackTik"> StyleBackTik</Dropdown.Item>
              <Dropdown.Item as={Link} to="/StyleFonction"> StyleFonction</Dropdown.Item>
              <Dropdown.Item as={Link} to="/StyleGeneral"> StyleGeneral</Dropdown.Item>
              <Dropdown.Item as={Link} to="/StyleSepare"> StyleSepare</Dropdown.Item>
              <Dropdown.Item as={Link} to="/UseLocation"> UseLocation</Dropdown.Item> */}

              <Dropdown.Item as={Link} to="/AddArticle"> AddArticle</Dropdown.Item>
              <Dropdown.Item as={Link} to="/DeleteArticle"> DeleteArticle</Dropdown.Item>
              <Dropdown.Item as={Link} to="/DataTableBasique"> DataTableBasique</Dropdown.Item>
              <Dropdown.Item as={Link} to="/DataTableSort"> DataTableSort</Dropdown.Item>
              <Dropdown.Item as={Link} to="/DataTableFull"> DataTableFull</Dropdown.Item>
              <Dropdown.Item as={Link} to="/HKbase"> HKbase</Dropdown.Item>
              <Dropdown.Item as={Link} to="/HookSelect"> HookSelect</Dropdown.Item>
              <Dropdown.Item as={Link} to="/HfBlur"> HfBlur</Dropdown.Item>
              <Dropdown.Item as={Link} to="/FormikExemple"> FormikExemple</Dropdown.Item>
              <Dropdown.Item as={Link} to="/FilterSection"> FilterSection</Dropdown.Item>
              <Dropdown.Item as={Link} to="/FilterSearch"> FilterSearch</Dropdown.Item>
              <Dropdown.Item as={Link} to="/FindSection"> FindSection</Dropdown.Item>

              <Dropdown.Item as={Link} to="/UseReducerSection"> UseReducerSection</Dropdown.Item>
              <Dropdown.Item as={Link} to="/UseReducerAdvanced"> UseReducerAdvanced</Dropdown.Item>
              <Dropdown.Item as={Link} to="/UseMemoSectionAdvanced"> UseMemoSectionAdvanced</Dropdown.Item>
              <Dropdown.Item as={Link} to="/UseCallBack"> UseCallBack</Dropdown.Item>

            </Dropdown.Menu>
           
          </Dropdown>       
            {/* <Link><button className='btn btn-danger'/>Click</Link> */}
          </div> 
    </div>
</nav>
  )
}

export default Lien