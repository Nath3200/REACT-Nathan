import axios from 'axios';
import React, {useState, useEffect} from 'react'

const AddArticle = () => {
  const [stateForm, setStateForm] = useState({
    title : "",
    article: "",
    auteur: ""
  });

const [messageSuccess, setmessageSuccess] = useState(false);
const [messageError, setmessageError] = useState(false);
const [badAuth, setbadAuth] = useState(false);

  // useEffect(() => {
  //   console.log("stateForm",stateForm)
  // }, [stateForm]);

  const handleSubmit = ()=>{
    console.log("stateForm",stateForm)
    console.log(localStorage.getItem("tokenBlog"))


axios.get('https://sabik-547abb.appdrag.site/api/checkToken', {
  "token" : localStorage.getItem("tokenBlog"),
  "AD_PageNbr" : "1",
  "AD_PageSize" : "500"
}).then(function(response){
  console.log(response.data);
  if (response.data.Table.lenght>0) {
        axios.post('https://sabik-547abb.appdrag.site/api/addArticle', {
  "auteur" : stateForm.auteur,
  "title" : stateForm.title,
  "article" : stateForm.article
}).then(function(response){
  console.log(response.data);
  if (response.data.affectedRows>0) {
    setmessageSuccess(true);
    setmessageError(false);
  }else{
    setmessageSuccess(false);
    setmessageError(true);
  }
});
  }else{

  }
});
  }
  return (
    <div className='container'>
      <div className='row justify-content-center align-items-center' style={{height: "100vh"}}>
        <div className='col-8 border border-dark shadow'>
          <form>
            <div>
              <label htmlFor="">title</label>
              <input type="text" value={stateForm.title} onChange={(e) => {
                setStateForm((prevState)=>({...prevState, title: e.target.value})
                // prevstate sert a a faire des raffraichissements automatiques
              )}}/>
            </div>
            <div>
              <label htmlFor="">article</label>
              <input type="text" value={stateForm.article} onChange={(e) => {
                setStateForm((prevState)=>({...prevState, article: e.target.value})
              )}}/>
            </div>
            <div>
              <label htmlFor="">auteur</label>
              <input type="text" value={stateForm.auteur} onChange={(e) => {
                setStateForm((prevState)=>({...prevState, auteur: e.target.value})
              )}}/>
            </div>
            <button type='submit' onClick={() => handleSubmit()} className='btn btn-primary'>Valider pour ajouter un article</button>  
          </form>
          {messageSuccess &&
          <h1 className='text-success'>Bravo un article a ete ajoute</h1>}
          {messageError &&
          <h1 className='text-danger'>Erreur</h1>}
          {badAuth &&
          <h1 className='text-danger'>mauvaise authentification</h1>
          }
        </div>
      </div>
    </div>
    
  )
}

export default AddArticle
