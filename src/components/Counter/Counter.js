import React, {useState, useEffect} from 'react'
import './Counter.css'; 

const Counter = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document
        .title = `le compteur est a ${counter}`
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