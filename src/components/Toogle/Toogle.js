import React, {useState} from 'react'

const Toogle = () => {

const [toogle, setToogle] = useState(false);

const ActiveToogle = () => {
    setToogle(!toogle)
}
  return (
    <div>hello Toogle

        <button onClick={() => ActiveToogle()}>Active Toogle</button>

          {toogle && 
          <div>coucou</div>
          }

          
          
    </div>
  )
}

export default Toogle