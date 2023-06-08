import React from 'react'
import { useSelector } from 'react-redux';
import {getVie, getDataBlog} from "../../redux/slices/test.slice"

const Fils = () => {
    const GETVIE = useSelector(getVie)
    const GETDATABLOG = useSelector(getDataBlog)
        
  return (
    <div>
        <h5>Fils</h5>
        <p>{GETVIE}</p>
        {
          GETDATABLOG?.map((data) => {
            <div key={data.id}>{data.title}</div>
          })
        }
    </div>
  )
}

export default Fils