import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { Triangle } from 'react-loader-spinner';

const UseFetch = (url) => {
    const [Data, setData] = useState(null);
    const [Loading, setLoading] = useState(null);
    const [Error, setError] = useState();

    useEffect(() => {
      // etat de depart
      setLoading(<Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />)
      setData(null)
      setError(null)

      axios.get(url)
      .then(res=>{
          if (res.data.Table) {
            setData(res.data.Table)
          }else{
            setError("il y a un probleme")
          }
      })
      .catch(err=>{
        console.log(err)
        setError("il y a un probleme")
      })
    }, [url]); 


  return {Data, Loading, Error}
}

export default UseFetch