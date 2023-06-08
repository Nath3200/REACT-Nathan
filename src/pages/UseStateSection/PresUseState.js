import React from 'react'

const PresUseState = () => {

    const handleClick = (cb) => {
        navigator.clipboard.writeText(cb)
    }
  return (

    <div className='container' style={{height:"80vh"}}>
    <h1>Presentation du Use State</h1>
    <p>Use State est une fonction dela bibliotheque REACT qui permet de creer et gerer des etats locaux dans des composants fonctionnels.</p>
    <div className='bg-dark text-light p-5 rounded-4' onClick={()=>{handleClick('const [state,setState] = useState("")')}
    }>
        <p>const [state,setState] = useState("")</p>
    </div>
        <br />
    <p>Ici state joue le role de getter, c est a dire qu il permet de recuperer la valeur passée</p>
    <p>setState (par convention, le Set s ecrit avec une majuscule) joue le role de Setter, il permet de modifier la valeur passée</p>
    <p>Entre les parentheses, on passera la valeur a laquelle on l initialise (ici sera un string).</p>
    </div>
  )
}

export default PresUseState