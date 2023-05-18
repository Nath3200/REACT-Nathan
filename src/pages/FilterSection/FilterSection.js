import React, {useState, useEffect} from 'react'

const object = [
        { id: 1, name: 'NewBalance', price: 10 },
        { id: 2, name: 'Aset' , price: 20 },
        { id: 3, name: 'Adidas' , price: 30 },
        { id: 4, name: 'Puma' , price: 40 },
        { id: 5, name: 'Nike' , price: 50 }
      ];
      
const FilterSection = () => {
    const [data, setData] = useState(object);
    const [InputValue, setInputValue] = useState(0);
    // le SET vient rafraichir automatiquement le component

    useEffect(() => {
      console.log("InputValue", InputValue)
    }, [InputValue]);
    // [InputValue] pour qu il m indique la valeure chaque fois qu il s actualise.

    const handleFilter = () => {
      
      const filteredProducts = data.filter(product => product.price <= InputValue)
      console.log(filteredProducts)
      setData(filteredProducts)
    }

  return (
    <div className='container m-5'>
      <h2>Liste des Sneakers</h2>
      <input type="number" value={InputValue} onChange={(e) => {setInputValue(e.target.value) }}/>
      <button onClick={() => {handleFilter()}}>Filtrer les produits</button>     
        { data?.map((product)=> (
          <div key={product.id}>{product.id}-{product.name}{ " "}{product.price}{"e"}</div>
          // pour chaque ID que j ai, le .map va me faire un tableau avec ecrit Hello
        )) }
    </div>
  )
}

export default FilterSection