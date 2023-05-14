import React,{useEffect, useState} from 'react';
// useEffect sert a declencher une fonction
// useState sert a stocker une fonction
import "./Lien.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom"
import DropI18N from '../DropI18N/DropI18N';
import { useTranslation } from 'react-i18next'

function Navbar () {

  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
  if (localStorage.getItem("tokenBlog")) {
    console.log("localstorage plein je suis auth")
    setIsAuth(true)
  }else{
    console.log("je ne suis pas auth")
    setIsAuth(false)}  
}, []);

const {t} = useTranslation()

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="warning" expand={expand} className="mb-3">
          <Container >
            <Navbar.Brand href="/">Cours React js</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  React js
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/Projet">Portfolio</Nav.Link>
                  <Nav.Link as={Link} to="/cv">C.V</Nav.Link>
                  <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                  <DropI18N/>
                  <Nav.Link as={Link} to="/login">{t("nav.login")}</Nav.Link>
                  

                {
                isAuth && 
                <>
                <Nav.Link as={Link} onClick= {() => {
                    localStorage.setItem("tokenBlog","")
                    // .setItem permet de vider le tokenBlog
                    window.location.reload()
                    // window.location.reload() permet de rafraichir la page automatiquement.
                  }} >Logout</Nav.Link>

                  {/* UseState */}
                  <NavDropdown title="UseState" id={`offcanvasNavbarDropdown-expand-${expand}`}  >
                    <NavDropdown.Item as={Link} to='/PresUseState'>Presentation du hooks</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/usfObject">
                      UseState Object
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item as={Link} to="/UseStateToogle"> UseState Boolean (toogle) </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/UseStateList"> UseState Array ( list ) </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/UseStateNumber">  UseState Number </NavDropdown.Item>
                  </NavDropdown>

                  {/* UseEffect */}
                  <NavDropdown title="UseEffect" id={`offcanvasNavbarDropdown-expand-${expand}`}  >
                    <NavDropdown.Item as={Link} to="/PresUseEffect">Presentation UseEffect</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/UefVide">
                      UseEffect []
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item as={Link} to="/useEffectDependance">
                      UseEffect [Avec Dependance]
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/UseEffectReturn">
                      UseEffect Avec Nettoyage ( Return )
                    </NavDropdown.Item>

                  </NavDropdown>

                  {/* Le Style */}
                  <Nav.Link as={Link} to="/StyleReact">CSS dans React</Nav.Link>


                  {/* API */}
                  <NavDropdown title="API" id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Axios get</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Axios post</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">Recuperer tous les articles</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Recuperer un article par son ID
                    </NavDropdown.Item>
                  </NavDropdown>

                  {/* Router */}
                  <NavDropdown title="Router" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                    <NavDropdown.Item href="#action3">Fonctionnement</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Page 404</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Route dynamique</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Link</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">UseLocation</NavDropdown.Item>                                        
                    <NavDropdown.Item href="#action5">UseParams</NavDropdown.Item>                                     
                    <NavDropdown.Item href="#action5">Navigate</NavDropdown.Item>
                  </NavDropdown> 
                                        
                  {/* DataTable */}
                  <NavDropdown title="DataTable" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                    <NavDropdown.Item as={Link} to="/DataTableBasique">DataTable Basique</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/DataTableSort">DataTableSort</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/DataTableFull">DataTable Full</NavDropdown.Item>
                  </NavDropdown>

                  {/* Redux */}
                  <NavDropdown title="Authentification" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                    <NavDropdown.Item href="#action3">Comment ca marche ?</NavDropdown.Item>
                  </NavDropdown>

                  {/* Hooks Avancé */}
                  <NavDropdown title="Hooks Avancé" id={`offcanvasNavbarDropdown-expand-${expand}`}  >
                    <NavDropdown.Item as={Link} to="/DataTableFull">UseReducer</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/DataTableFull">UseMemo</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/DataTableFull">UseCallback</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/DataTableFull">useMemo vs useCB</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/PresUseRef">UseRef</NavDropdown.Item>
                  </NavDropdown>

                  {/* Redux */}
                  <NavDropdown title="Redux" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                    <NavDropdown.Item as={Link} to="/DataTableFull">Environnement</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/DataTableFull">UseSelector</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/DataTableFull">UseDispatch</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Articles" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                    <NavDropdown.Item as={Link} to="/AddArticle">add Article</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/DeleteArticle">Delete Article</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/UpdateArticle">Update Article</NavDropdown.Item>
                  </NavDropdown>
                  </>
                  }
                  
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    </>
  );
}

export default Navbar;