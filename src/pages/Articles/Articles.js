// uef pour useEffect((=>{})) sert a gerer les cycles de vie des components
// usf pour useState sert a stocker les valeurs

import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom';

const Articles = () => {

    const [data, setData] = useState();

    const getParams = useParams();
    console.log("getParams",getParams.id)
    let location = useLocation();
    // console.log("location",location.pathname.slice(9))
    // /article/1 .slice(9) = prends moi qu a partir de la position 9

    useEffect(() => {
    axios.get('https://sabik-547abb.appdrag.site/api/getApiId', {
     params: {
        "id" : getParams.id,
        "AD_PageNbr" : "1",
        "AD_PageSize" : "500"
  }
}).then(function(response){
  console.log(response.data);
  setData(response.data.Table[0]);
});
    }, []);
  return (
    <div>
      
        <div className='container row justify-content-center'>
            
            {data &&
            <div className='col-10 bg-light shadow rounded-4 m-3 p-3'>
                 <div>{data.id}</div>
                 <h1 className='text-center'>{data.title}</h1>
                 <img src={data.image}/>
                 <p className='p my-4'>{data.article}</p>                 
                 <p>{data.auteur}</p>            
            </div>   }
            
        </div>
    </div>
  )
}

export default Articles