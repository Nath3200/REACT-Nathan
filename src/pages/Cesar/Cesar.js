import React, {useState, useEffect} from 'react'
import imgCesar from "../../assets/img/cesar.jpg"

const Cesar = () => {
    const [Arme, setArme] = useState(0);

    const [NameOfKing, setNameOfKing] = useState("");
    // NameOfKing est la const et setNameOfing est la fonction qui va permettre de modifier la variable
    useEffect(() => {
        console.log("cesar est monte");
        setNameOfKing("Cesar")
        return () =>{
          setNameOfKing("")
          setArme(0)
        // fonction nettoyage
        }  
    }, []);
    useEffect(() => {
      console.log("mon armee a ete modifiee")
    }, [Arme]);


    const handleClick = () => {
      setArme ((prev)=>(prev+1))
    }
  return (
    <div className='container'>
        <h1>Cesar vous dit bonjour</h1>
        <img src= {imgCesar} alt="Cesar" />
        Le nom du roi est : {NameOfKing}
        <p>J ai une armee de {Arme} millier de soldats</p>
        <button className='btn btn-dark' onClick={() => handleClick() }
          // setArme ((prev)=>(prev+1))    
          >Ajouter des soldats a l empereur</button>
    </div>
  )
}

export default Cesar