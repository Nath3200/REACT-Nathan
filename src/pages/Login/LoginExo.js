import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {setAuth, 
 getEmail, setEmail,
 getPassword, setPassword
} from '../../redux/slices/auth.slice'
import { useDispatch, useSelector } from 'react-redux';
import './Login.css'

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch() // methode qui parle a redux et de modifier le state general

  const GETEMAIL = useSelector(getEmail) // methode qui permet de recuperer le state de redux
  const GETPASSWORD = useSelector(getPassword)
  

 

  // 1 creer deux input email, password
  // 2 recuperer la valeur des deux inputs ( onChange )
  // 3 envoyer la valeur de nos input a notre API
  // 4 stock la reponse de notre api

const handleEmail =(e) => {
  // console.log("handleemail open",e.target.value)
  dispatch(setEmail(e.target.value)) 
}
const handlePassword =(e) => {
  // console.log("handlepassword open",e.target.value)
  dispatch(setPassword(e.target.value)) 
}

const sendData = () => {
  console.log("send data")
  console.log(GETEMAIL)
  console.log(GETPASSWORD)

  axios.get('https://sabik-547abb.appdrag.site/api/checkUser', {
  params: {
    "email" : GETEMAIL,
    "password" : GETPASSWORD,
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
  console.log(response.data);
  console.log(response.data.Table[0])
  dispatch(setAuth(response.data.Table[0]))
});
}






  return (
    
      <div className='container bg-secondary row justify-content-center align-items-center'style={{height:"100vh"}}> 
        <input type="email" onChange={handleEmail} />
        <input type="password" onChange={handlePassword}/>

        <button onClick={() => sendData() }>envoyer le formulaire</button>
      </div>
   
  )
}

export default Login
// required pour obliger a remplire le champ