import React,{useEffect, useState} from 'react';
// useEffect sert a declencher une fonction
// useState sert a stocker et mofifier une fonction
import "./Lien.css"
import { Link } from 'react-router-dom'

// import {Dropdown} from "react-bootstrap"
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

import DropI18N from '../DropI18N/DropI18N'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom';
import UseDocumentTitle from '../../components/UseCustoms/UseDocumentTitle';
import { useSelector, useDispatch } from 'react-redux';
import {getToken} from "../../redux/slices/auth.slice"
import { getDarkMode, setDarkMode } from "../../redux/slices/darkmode.slice"


const Lien = () => {

  const dispatch = useDispatch() // on instancie la methode qui permettra de modifier notre state de redux

  const GETDARKMODE = useSelector(getDarkMode)
  // const [isAuth, setIsAuth] = useState(false);
  const [darkMode, setdarkMode] = useState(false);
  let location = useLocation()
  // console.log("location", location.pathname)

  const GET_TOKEN = useSelector(getToken);

  const {t} = useTranslation()

  UseDocumentTitle("Nathan Guedj's CV")

  useEffect(() => {
    console.log("darkMode state",GETDARKMODE)
  }, [GETDARKMODE])

  const DarkMode = () => {
    setdarkMode(!darkMode)
    dispatch(setDarkMode(!GETDARKMODE))
   // darkMode === false ? setdarkMode(true) : setdarkMode(false)huhi
  }

//   useEffect(() => {
//   if (localStorage.getItem("tokenBlog")) {
//     console.log("localstorage plein je suis auth")
//     // setIsAuth(true)
//   }else{
//     console.log("je ne suis pas auth")
//     setIsAuth(false)}  
// }, []);

  

  // const changeColor= () => {
  //   const element = document.getElementsByClassName("flex-menu")[0]
  //   console.log("element", element)
  //   element.style.border = "2px blue solid"
  // }

  return (

    <Navbar>
    <div className="conteneur" >
        <div className="flex-menu">

          
          {/* onMouseOver={()=> changeColor()} */}
            <Nav.Link as={Link} to="/Projet" className='text-decoration-none' 
            // style={{color :   GETDARKMODE === true ? "white!important" : "black!important" }} 
            >
              <span className ={`${location.pathname === "/Projet" ? "fw-bold" : ""} text-${GETDARKMODE=== true ? "light":"dark"}  `}>Portfolio</span> </Nav.Link>
            <Nav.Link as={Link} to="/cv"><span className ={`${location.pathname === "/cv" ? "fw-bold" : ""} text-${GETDARKMODE=== true ? "light":"dark"} `}>C.V</span></Nav.Link>
            <DropI18N/>
            
            <span onClick={()=> DarkMode()}>{GETDARKMODE === false ?  <button type="button" class="btn btn-light">Light</button>: <button type="button" class="btn btn-dark">Dark</button>  }</span>

            <Nav.Link as={Link} to="/blog"><span className ={`${location.pathname === "/blog" ? "fw-bold" : ""} text-${GETDARKMODE=== true ? "light":"dark"} `}>Blog</span> 
            </Nav.Link>
            
            <Nav.Link as={Link} to="/login"><span className={` text-${GETDARKMODE=== true ? "light":"dark"} `}>{t("nav.login")}</span></Nav.Link>

            {/* <Link to="/contact">Contact</Link> */}
            {/* <Link to="/Counter">Counter</Link>
            <Link to="/List">List</Link>
            <Link to="/Toogle">Toogle</Link>
            <Link to="/Metier">Metier</Link> */}

              {
                GET_TOKEN && 
                
                <Nav.Link as={Link} onClick= {() => {
                    localStorage.setItem("tokenBlog","")
                    // .setItem permet de vider le tokenBlog
                    window.location.reload()
                    // window.location.reload() permet de rafraichir la page automatiquement.
                  }} >Logout</Nav.Link> }

              
            <NavDropdown
              
             variant="dark" id={`offcanvasNavbarDropdown-expand-`} title = "DROPDOWN">

                         
            
              <NavDropdown.Item as={Link} to="/AppDrag" >AppDrag</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Counter">Counter</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/list">List</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Toogle"> Toogle</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Metier"> Metier</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/SetIntervalCompo"> SetIntervalCompo</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/MouseMoove"> MouseMoove</NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/test"> Test</NavDropdown.Item>

              {/* <Dropdown.Item as={Link} to="/PageUne"> PageUne</Dropdown.Item>            
              <Dropdown.Item as={Link} to="/ApiGeneral"> ApiGeneral</Dropdown.Item>
              <Dropdown.Item as={Link} to="/AxiosGet"> AxiosGet</Dropdown.Item>
              <Dropdown.Item as={Link} to="/AxiosPost"> AxiosPost</Dropdown.Item>           
              <Dropdown.Item as={Link} to="/GetArticleById"> GetArticleById</Dropdown.Item>
              <Dropdown.Item as={Link} to="/GetArticle"> GetArticle</Dropdown.Item> */}
              {/* <Dropdown.Item as={Link} to="/LinkExplication"> LinkExplication</Dropdown.Item>
              <Dropdown.Item as={Link} to="/RouteDyn"> RouteDyn</Dropdown.Item>
              <Dropdown.Item as={Link} to="/RouterGeneral"> RouterGeneral</Dropdown.Item>
              <Dropdown.Item as={Link} to="/StyleBackTik"> StyleBackTik</Dropdown.Item>
              <Dropdown.Item as={Link} to="/StyleFonction"> StyleFonction</Dropdown.Item>
              <Dropdown.Item as={Link} to="/StyleGeneral"> StyleGeneral</Dropdown.Item>
              <Dropdown.Item as={Link} to="/StyleSepare"> StyleSepare</Dropdown.Item>
              <Dropdown.Item as={Link} to="/UseLocation"> UseLocation</Dropdown.Item> */}

              <NavDropdown.Item as={Link} to="/AddArticle"> AddArticle</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/DeleteArticle"> DeleteArticle</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/DataTableBasique"> DataTableBasique</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/DataTableSort"> DataTableSort</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/DataTableFull"> DataTableFull</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/HKbase"> HKbase</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/HookSelect"> HookSelect</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/HfBlur"> HfBlur</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/FormikExemple"> FormikExemple</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/FilterSection"> FilterSection</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/FilterSearch"> FilterSearch</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/FindSection"> FindSection</NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/PresUseState"> PresUseState</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/UseReducerSection"> UseReducerSection</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/UseReducerAdvanced"> UseReducerAdvanced</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/UseMemoSectionAdvanced"> UseMemoSectionAdvanced</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/UseCallBack"> UseCallBack</NavDropdown.Item>

            
           
            </NavDropdown> 
                   
            {/* <Link><button className='btn btn-danger'/>Click</Link> */}
          </div> 
    </div>
</Navbar>
  )
}

export default Lien