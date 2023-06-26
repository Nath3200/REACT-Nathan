import React from 'react'

const PresUseEffect = () => {

    const handleClick = (cb) => {
        navigator.clipboard.writeText(cb)
    }
  return (

    <div className='container' style={{height:"80vh"}}>
    <h1>Presentation du Use Effect</h1>
    <p>Use Effect est une fonction de la bibliotheque REACT qui permet de déclencher des composants fonctionnels. Il permet de contrôler le cycle de vie du composant et d'effectuer des actions supplémentaires en fonction des besoins de l'application.




</p>
    <div className='bg-dark text-light p-5 rounded-4' onClick={()=>{handleClick('const [state,setState] = useState("")')}
    }>
        <p>useEffect( ( ) =^ {
          console.log("useEffect")
        }, [ ] );</p>
    </div>
        <br />
    <p>Dans cet exemple spécifique, la fonction useEffect est utilisée pour exécuter une fonction anonyme qui affiche "useEffect" dans la console.</p>
    <p>Le deuxième argument passé à useEffect est un tableau vide ( [ ] ), ce qui signifie que cette fonction sera exécutée uniquement une fois, immédiatement après le rendu initial du composant.</p>
    <p>Entre les crochets, on passera la valeur a ecouter minutieusement.</p>
    </div>
  )
}

export default PresUseEffect