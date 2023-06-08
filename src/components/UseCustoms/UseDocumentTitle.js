import React, { useEffect } from 'react'

const UseDocumentTitle = (title) => {
    useEffect(() => {
      const prevTitle= document.title;
      document.title = title

      return() =>{
        document.title= prevTitle
      }
    },[title]);
}

export default UseDocumentTitle