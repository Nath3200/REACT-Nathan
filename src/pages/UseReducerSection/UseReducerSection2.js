import React, {useState, useReducer} from 'react'
import ACTION from './ACTION'



function reducer(state, action) {
    switch (action.type) {
        case ACTION.INCREMENT: 
        if (state.count >=10) {
            return {count:0}
        }
            return{count : state.count +1}
        case ACTION.DECREMENT: 
            return{count : state.count -1}
        case ACTION.RESET: 
            return{count : count.count }
        default :
            
    }
}

let count = {count : 0}

const UseReducerSection2 = () => {

    // const [Count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, count)

  return (
    <div className='container m-5 p-5'>hello UseReducer
    Count : <h1>{state.count}</h1>
    {/* <button className='btn btn-success' onClick={() => {
      setCount((p) => p +1)
    }}>Incrementer +</button>
    <button className='btn btn-danger' onClick={() => {
      setCount((p) => p -1)
    }}>Decrementer -</button> */}
    <button className='btn btn-success' onClick={() => {
      dispatch({type :ACTION.INCREMENT})
    }}>Incrementer +</button>
    <button className='btn btn-danger' onClick={() => {
      dispatch({type :ACTION.DECREMENT})
    }}>Decrementer -</button>
    <button className='btn btn-light' onClick={() => {
      dispatch({type :ACTION.RESET})
    }}>Reset</button>
    {/* <h1>{count}</h1> */}
    </div>
  )
}

export default UseReducerSection2