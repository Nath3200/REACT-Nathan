import React from 'react'
import "./Lien.css"
import { Link } from 'react-router-dom'

const Lien = () => {
  return (
    <nav>
    <div className="conteneur">
        <div className="flex-menu">
            <Link to="/">Accueil</Link>
            <Link to="/cv">Mon c.v.</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/Toogle">Toogle</Link>
        </div>
    </div>
</nav>
  )
}

export default Lien