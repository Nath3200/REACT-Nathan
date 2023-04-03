import React, {useState} from 'react'

const List = () => {
const [list, setList] = useState([{
id: 1,
coursImportant: "React js"
},{
    id: 2,
    coursImportant: "html css"
},{
    id: 3,
    coursImportant: "Vanilla javascript"
}]);

  return (
    <div>
        <h1>List des cours importants</h1>
        {
        list.map((cour) => (
            <div key={cour.id}>
            {cour.coursImportant} 
            </div>          
        ))
}
</div>
)
}

export default List