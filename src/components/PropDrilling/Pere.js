import React from 'react'
import Fils from './Fils'

const Pere = ({SavoirGP, handleName}) => {
    console.log("Pere", SavoirGP)
  return (
    <div>
        <h2>Pere</h2>
        <Fils SavoirGP={SavoirGP} handleName={handleName}/>
    </div>
  )
}

export default Pere