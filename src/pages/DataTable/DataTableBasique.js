import DataTable from 'react-data-table-component'; // importation du module
import React, { useEffect, useState } from "react"
// useState sert a stocker la data
// useEffect sert a declencher l action
import axios from 'axios'; 
// axios permet d iporter un API

const columns = [
    {
        name: 'title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'body',
        selector: row => row.body,
        sortable: true,
    },
    {
      name: 'id',
      selector: row => row.id,
      sortable: true,
  },
  {
    name: 'userId',
    selector: row => row.userId,
    sortable: true,
},
];


function DataTableBasique() { // nom du component
// usf
const [dataPost, setDataPost] = useState();
const [MessageError, setMessageError] = useState(false);  // s il y a une erreur dans la data
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        // ('mettre la data qu on veut recuperer')
        .then(function (response) {
          // handle success
          console.log(response.data);
          setDataPost(response.data)
          // () affiche moi la response.data
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          setMessageError(true);
        })
    }, []);

    return (
      <div className='container'>
        <DataTable
            columns={columns}
            data={dataPost}
            // pour afficher le dataPost du json placeholder
            fixedHeader
            highlightOnHover
            pagination          
        />
        {
          MessageError && 
          <h1 className='text-danger'>
           l url est mauvaise
          </h1>
        }
        </div>
    );
};

export default DataTableBasique // export du component

// lien axios https://www.npmjs.com/package/axios