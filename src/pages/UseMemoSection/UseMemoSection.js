import React, {useState} from 'react'

const UseMemoSection = () => {
    const [Count, setCount] = useState(0);
    const [OtherValue, setOtherValue] = useState(0);

    const ExpensiveFonction = () => {
      console.log("un calcul complique")
      let result = 0
      for (let index = 0; index < 1000000; index++) {
        result+=1
        
      }
      return result + Count
    }
  return (
    <div>
        <p>Count : {Count}</p>
        <p>Other Value : {OtherValue}</p>
        <p>Result (fonction) : {ExpensiveFonction}</p>
        <button onClick={() => setCount(c => c+1)}>Increment</button>
        <button onClick={() => setOtherValue(v => v+1)}>Increment</button>
    </div>
  )
}

export default UseMemoSection