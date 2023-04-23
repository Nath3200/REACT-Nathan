// uef pour useEffect((=>{}))
// usf pour useState
// key pour revenir en arriere dans le .map

import React, {useEffect, useState} from 'react'
import './Blog.css'
import Layout from '../../components/Layout/Layout'
import Introduction from '../../components/Introduction/Introduction';
import Lien from '../../components/Lien/Lien';
import axios  from 'axios';

const Blog = () => {

  const [name, setName] = useState("Nathan Guedj");
        // let name = "nathan guedj"
        // cb = callback
        const HandleName = (cb)=>{ //importer test du l enfant
           setName(cb)
        }

  const [activeFooter, setActiveFooter]= useState(false);

  const HandleFooter = () => {setActiveFooter(!activeFooter)
  }

  const [data, setData] = useState();

useEffect(() => {
  console.log("mon blog est monte");
  axios.get('https://sabik-547abb.appdrag.site/api/getAllBlog', {
  params: {
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
  console.log(response.data);
  setData(response.data.Table);
});
}, []);

  return (
    <>
    <header className='blog'>
            <Introduction name={name}/>

			<Lien/>

	  </header>

    <h1>Welcom in my Blog</h1>

    {
     data && data.map((row)=>(
      <div key={row.id} className='bg-secondary shadow-lg rounded m-3 p-3'>
          <h2>{row.title}</h2>
          <img src={row.image}></img>
          <p>{row.article}</p>
          <p>{row.auteur}</p>
      </div>
  ))
    }
    
    {/* <Layout footer={activeFooter}>

       <div>Hello Blog</div>
       <button onClick={() => HandleFooter()}>active footer</button>

    </Layout> */}
    </>
  )
}

export default Blog