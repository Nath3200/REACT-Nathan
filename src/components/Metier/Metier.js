import React, {useState} from 'react'
import './Metier.css'; 

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
    <div className='metier'>
        <h1 className='nom'>Je suis {state.metier} {" "} {state.niveau}</h1>
        <button className='junior' onClick={()=>handleJunior()}>
        dans trois mois, je serais junior</button>
        <button className='intermediaire' onClick={()=>handleIntermediaire()}>dans un an,je serais intermediaire</button>
        <button className='senior' onClick={()=>handleSenior()}>dans cinq ans,je serais senior</button>
    </div>
  )
}

export default Metier


// FAIT PAR MOI

// import React, {useState} from 'react'

// const Metier = () => {

//   const [State, setState] = useState({
//     id : 1,
//     metier : "fullstack dev",
//     niveau : "en formation"
//   });

//   const HandleJunior = () => {
//     setState((Prev)=>({...Prev,niveau:"junior"}))
//   }
//   const HandleIntermediaire = () => {
//     setState((Prev)=>({...Prev,niveau:"intermediaire"}))
//   }
//   const HandleSenior = () => {
//     setState((Prev)=>({...Prev,niveau:"senior"}))
//   }

//   return (
//     <div className='container'>
//       <h1>Je suis {State.metier} {""} {State.niveau}</h1>
//       <button className='btn btn-success' onClick={HandleJunior}>Junior</button>
//       <button className='btn btn-danger' onClick={HandleIntermediaire}>Intermediaire</button>
//       <button className='btn btn-light' onClick={HandleSenior}>Senior</button>
//     </div>
//   )
// }

// export default Metier