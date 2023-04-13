import React, {useState} from 'react'
import './List.css';  

const List = () => {
const [list, setList] = useState([{
id: 1,
coursImportant: "- React js"
},{
    id: 2,
    coursImportant: "- html css"
},{
    id: 3,
    coursImportant: "- Vanilla javascript"
}]);



  return (
    <div className='list'>
        <h1 className='prenom'>Liste des cours importants : </h1>
        {
        list.map((cour) => (
            <div className='cours' key={cour.id}>
            {cour.coursImportant} 
            </div>          
        ))
}
</div>
)
}

export default List