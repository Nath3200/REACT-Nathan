import React, { useRef, useState } from 'react'
import axios from 'axios'

const DeleteArticle = () => {

    const inputRef = useRef(null)
    // useRef permet de s accrocher a une data pour mieu la controler
    const [messageSuccess, setSuccess] = useState()
    const [messageError, setError] = useState()

    const handleSubmit = (e) =>{
    // handle = gerer ; e = event
        e.preventDefault()
        // e.preventDefault() sert a eviter le rafraichissement
        axios.get('https://sabik-547abb.appdrag.site/api/deleteArticle', {
        params: {
        "id" : ""
  }
}).then(function(response){
  console.log(response.data);
});
    }
  return (
    <div>
        <h1>Delete Article</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">ID de mon Article</label>
          <input type="text" />
          <input type="submit" value="Supprimer" />
        {
            messageSuccess &&
            <h2 className='text-success'>L article a ete supprime</h2>
        }
        {/* : = sinon */}
        {
            messageError &&
            <h2 className='text-warning'>L article n a pas ete supprime</h2>
        }
        </form>
    </div>
  )
}

export default DeleteArticle