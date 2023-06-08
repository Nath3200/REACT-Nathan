import React, {useEffect} from 'react'
import Pere from './Pere';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setVie, setdataBlog } from '../../redux/slices/test.slice';
import UseFetch from '../UseCustoms/UseFetch'
const GrandPere = () => {
   
    const handleclick= () => {
      console.log("open");
      dispatch(setVie("tais toi gamin"))
    }
    const dispatch = useDispatch()
    const {Data, Loading, Error} = UseFetch('https://sabik-547abb.appdrag.site/api/getAllBlog')

    useEffect(() => {
      (setdataBlog(Data))

    }, []);

  return (
    <div>
        <h1>Grand pere</h1>
        Mon petit fils s appelle ?       
        <Pere/>

        <button onClick={() => {
          handleclick()
        }}>Grand pere parle</button>

    </div>
  )
}

export default GrandPere