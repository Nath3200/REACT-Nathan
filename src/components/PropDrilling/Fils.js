import React, {useEffect} from 'react'

const Fils = ({SavoirGP, handleName}) => {
    console.log("Fils", SavoirGP)
        
    useEffect(() => {
        handleName("Elie")
    }, []);
  return (
    <div>
        <h5>Fils</h5>
        <p>{SavoirGP.vie}</p>
    </div>
  )
}

export default Fils