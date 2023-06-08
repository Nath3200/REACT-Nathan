import React, {useState} from 'react'
import Pere from './Pere';
import { useSelector } from 'react-redux';


const GrandPere = () => {
    const [SavoirGP, setSavoirGP] = useState({
        vie : "raconte ses exploits du passe"
    });
    const [CatchValuePF, setCatchValuePF] = useState("");

    const handleName = (name) => {
        setCatchValuePF(name)
    }
  return (
    <div>
        <h1>Grand pere</h1>
        Mon petit fils s appelle ? {CatchValuePF}
        
        <Pere SavoirGP= {SavoirGP} handleName={handleName}/>

    </div>
  )
}

export default GrandPere