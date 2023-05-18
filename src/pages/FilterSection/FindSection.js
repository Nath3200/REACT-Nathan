import React, { useState } from 'react'

const FindSection = () => {
    const [utilisateurs, setUtilisateurs] = useState([
        { id: 1, nom: 'Alice', metier: "developpeuse" },
        { id: 2, nom: 'Bob' , metier: "camionneur" },
        { id: 3, nom: 'Charlie' , metier: "agent de securite" },
        { id: 4, nom: 'David' , metier: "animateur" },
        { id: 5, nom: 'Eve' , metier: "formateur" },
        { id: 6, nom: 'Eva' , metier: "cuisto" }
      ]);

      const [idRecherche, setIdRecherche] = useState("");
      const [UserTrouve, setUserTrouve] = useState();

       const handleInputChange = (e) => {
        //  console.log("fonction active", e.target.value)
        setIdRecherche (e.target.value)
       }

      const SearchUser = () => {
        console.log("SearchUser open")
        const utilisateur = utilisateurs.find(user => user.id === parseInt(idRecherche))
        utilisateur ? setUserTrouve(utilisateur) : setUserTrouve(null)
      }
       
  return (
    <div className='container-m5'>
        <h1>FindSection</h1>
        {utilisateurs.map((element,index) => (
            <div className='bg-primary rounded-4 text-light m-3 p-5' key={index}>
                id : {element.id}
                <br />
                nom : {element.nom}
                <br />
                metier : {element.metier}
            </div>
        ))}

        <input type="text" value={idRecherche} onChange={handleInputChange} />
        <button className='btn btn-info' onClick={() => 
        SearchUser() }>Rechercher par ID</button>
        {UserTrouve ? (
          <div>Utilisateur trouvé : {UserTrouve.nom} et son metier : {UserTrouve.metier} </div>
        ) : (
          <h1 className='text-danger'>Aucun utilisateur trouvé</h1>
        )}
        </div>
  )
}

export default FindSection