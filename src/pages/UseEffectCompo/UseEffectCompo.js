// uef pour useEffect((=>{})) sert a gerer les cycles de vie des components
// usf pour useState sert a stocker les valeurs
// key pour revenir en arriere dans le .map
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';

const UseEffectCompo = () => {

    const [data, setData] = useState();

    useEffect(() => {
        console.log("mon composant est monte");

        axios.get('https://sabik-547abb.appdrag.site/api/getAllArticles', {
  params: {
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
  console.log(response.data.Table);
  setData(response.data.Table);
});
    }, []);
  return (
    <div>
    <h1>hello UseEffectCompo</h1>
    {
        data && data.map((row)=>(
            <div key={row.id} className='bg-secondary shadow-lg rounded m-3 p-3'>
                <h2>{row.title}</h2>
                <p>{row.article}</p>
                <button className='btn btn-danger' style={{borderRadius:"50px"}}>alert</button>
            </div>
        ))
    }
    </div>
  )
}

export default UseEffectCompo