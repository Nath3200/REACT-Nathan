import React, {useState} from 'react'
import './Toogle.css'; 

const Toogle = () => {

const [toogle, setToogle] = useState(false);

const ActiveToogle = () => {
    setToogle(!toogle)
}
  return (
    <div className='toogle'>
      <h1 className='name'>Welcome to the Toogle</h1>

        <button className='bouton' onClick={() => ActiveToogle()}>Active Toogle</button>

          {toogle && 
          <div className='coucou'>coucou</div>
          }

          
          
    </div>
  )
}

export default Toogle