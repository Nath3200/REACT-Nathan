import React, {useState, useCallback} from 'react'
import ButtonExt from './ButtonExt';

const UseCallBack = () => {
    const [Count, setCount] = useState(0);
    const handleClick = useCallback(() => {
      console.log("button clicked")
      setCount((c) => c+1)
    },[])
  return (
    <div>
        <h1>Count : {Count}</h1>
        <ButtonExt handleClick={handleClick}/>
    </div>
  )
}

export default UseCallBack