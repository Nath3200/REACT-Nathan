import React, {useState, useEffect} from 'react'
import './Counter.css'; 

const Counter = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `le compteur est a ${counter}`
    }, [counter]);

    const Increment = () => {
        setCounter(counter +1)
    }
    const Decrement = () => {
        setCounter(counter -1)
    }
    const Reset = () => {
        setCounter(0)
    }

  return (
    <div className='counter'>
        <div className='number'> {counter}</div>
        <button className='btn increment' onClick={() =>Increment()}
        >Increment +</button>
        <button className='btn decrement' onClick={() =>Decrement()}>Decrement -</button>
        <button className='btn reset' onClick={() =>Reset()}>Reset </button>
    </div>
  )
}

export default Counter




// FAIT PAR MOI

// import React, {useEffect, useState} from 'react'

// const Counter = () => {

//     const [Number, setNumber] = useState(0)
//     useEffect(() => {
//         document.title = `Le compteur est a ${Number}`
//     }, [Number]);

//     const Increment = () => {
//       setNumber(Number +1)
//     }
//     const Decrement = () => {
//         setNumber(Number -1)
//     }
//       const Reset = () => {
//         setNumber(0)
//     }

//   return (
//     <div className='container'>
//         <h1>{Number}</h1>
//         <button className='btn btn-success' onClick={Increment}>Increment</button>
//         <button className='btn btn-danger' onClick={Decrement}>Decrement</button>
//         <button className='btn btn-light' onClick={Reset}>Reset</button>
//     </div>
//   )
// }

// export default Counter