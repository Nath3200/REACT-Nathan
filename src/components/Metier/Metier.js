import React, {useState} from 'react'

const Metier = () => {
    
    const [state, setState] = useState({
       id: 1,
       metier: "fullstack dev",
       niveau: "en formation"
    });

const handleJunior = () => {
  setState ((prevState)=>({...prevState, niveau:"junior"}))
}
const handleIntermediaire = () => {
    setState ((prevState)=>({...prevState, niveau:"intermediaire"}))
  }
  const handleSenior = () => {
    setState ((prevState)=>({...prevState, niveau:"senior"}))
  }

  return (
    <div>
        <h1>je suis {state.metier} {" "} {state.niveau}</h1>
        <button onClick={()=>handleJunior()}>
        dans trois mois, je serais junior</button>
        <button onClick={()=>handleIntermediaire()}>dans un an,je serais intermediaire</button>
        <button onClick={()=>handleSenior()}>dans cinq ans,je serais senior</button>
    </div>
  )
}

export default Metier