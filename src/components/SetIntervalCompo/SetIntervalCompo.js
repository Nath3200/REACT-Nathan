import React, {useState, useEffect} from 'react'

const SetIntervalCompo = () => {

const [time, setTime] = useState(0);

useEffect(() => {
    const SetIntervalId = setInterval(() => {
        // prevstate permet de conserver l etat d avant et de le voir
        setTime((prevstate) => {
        console.log(prevstate)
        return prevstate +1 } )
    }, 1000)
    return ()=>clearInterval(SetIntervalId)
}, []);

  return (
    <div>
        <h1>Mon compteur tourne depuis : {time} </h1>
    </div>
  )
}

export default SetIntervalCompo





// import React, {useState, useEffect} from 'react'

// const SetIntervalCompo = () => {

//     const [Time, setTime] = useState(0);

//     useEffect(() => {
//       const setIntervalId = setInterval(() => {
        
//       }, Time);
//     }, []);

//   return (
//     <div>SetIntervalCompo</div>
//   )
// }

// export default SetIntervalCompo