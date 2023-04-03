// le Layout sert a l affichage
import React from 'react'
import Lien from '../Lien/Lien'
import Footer from '../Footer/Footer'

const Layout = ({children, footer}) => {
  return (
    <>
    <Lien/>
    {children}
    {footer === true &&
    <Footer/>
    }
    </>
  )
}

export default Layout