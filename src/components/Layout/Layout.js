// le Layout sert a l affichage
import React from 'react'
import Lien from '../Lien/Lien'

const Layout = ({children}) => {
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