import React from 'react'
import Layout from '../../components/Layout/Layout'

const Blog = () => {

  const [activeFooter, setActiveFooter]= useState(false);

  const HandleFooter = () => {setActiveFooter(!activeFooter)
  }

  return (
    <>
    <Layout footer={activeFooter}>

       <div>Hello Blog</div>
       <button onClick={() => HandleFooter()}>active footer</button>

    </Layout>
    </>
  )
}

export default Blog