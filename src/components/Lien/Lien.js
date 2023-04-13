import React from 'react'
import "./Lien.css"
import { Link } from 'react-router-dom'

const Lien = () => {
  return (
    <nav>
    <div className="conteneur">
        <div className="flex-menu">
            <Link to="/">Accueil</Link>
            <Link to="/cv">C.V</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>       
            <Link to="/Counter">Counter</Link>
            <Link to="/List">List</Link>
            <Link to="/Toogle">Toogle</Link>
            <Link to="/Metier">Metier</Link>
        </div>
    </div>
</nav>
  )
}

export default Lien