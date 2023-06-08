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


// FAIT PAR MOI

// import React, {useState} from 'react'

// const Toogle = () => {

//     const [Toogle, setToogle] = useState(false);

//     const ActiveToogle = () => {
//       setToogle(!Toogle)
//     }

//   return (
//     <div className='container'>
//       <button className='btn btn-succes' onClick={ActiveToogle}>Click me</button>
//       {
//         Toogle && 
//         <div>Je suis le toogle</div>
//       }
//     </div>
//   )
// }

// export default Toogle