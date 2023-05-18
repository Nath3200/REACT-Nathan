import React, {useState} from 'react'

const FilterSearch = () => {
    const [utilisateurs, setUtilisateurs] = useState([
        { id: 1, nom: 'Alice', metier: "developpeuse" },
        { id: 2, nom: 'Bob' , metier: "camionneur" },
        { id: 3, nom: 'Charlie' , metier: "agent de securite" },
        { id: 4, nom: 'David' , metier: "animateur" },
        { id: 5, nom: 'Elie' , metier: "formateur" },
        { id: 6, nom: 'Eva' , metier: "cuisto" }
      ]);
      const [valueInput, setvalueInput] = useState("");
      const [Resultat, setResultat] = useState([]);

      const handleInput = (e) => {
        console.log("fonction ouverte")
        const valueRecherche = e.target.value
        console.log("valueRecherche", valueRecherche)
        setvalueInput(valueRecherche)

        const resultFilter = utilisateurs.filter(user => user.nom.toLocaleLowerCase().includes(valueRecherche))
        console.log("resultFilter", resultFilter)
        setResultat(resultFilter)
      }
  return (
    <div>
      <input type="text" value={valueInput} onChange={handleInput} />
      {Resultat.length >0 ? (
        <div>
          <h6>Resultat de la recherche</h6>
          <div>{Resultat.map(user=>(
            <div key={user.id}>
            Nom :  {user.nom} 
            <br />
            Metier : {user.metier}</div>
          ))}
          </div>
        </div>
      ) : 
      (
        <div>Aucun resultat</div>
      )}
    </div>
  )
}

export default FilterSearch
