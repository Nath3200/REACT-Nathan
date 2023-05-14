import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [authError, setAuthError] = useState(false);
  const {t} = useTranslation()
  useEffect(() => {
    
  }, []);

const handleSubmit = (e) => {
  console.log("worked")
  e.preventDefault()
  console.log(email,password)
  axios.get('https://sabik-547abb.appdrag.site/api/checkUser', {
  params: {
    "email" : email,
    "password" : password,
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
  console.log(response.data.Table[0].token);
  if (response.data.Table === 0) {
    console.log("auth error")
    setAuthError(true)
  }else{
    console.log("auth reussi")
    setAuthError(false)
    // afin d enlever le message d erreur si je rentre une bonne authentification
    localStorage.setItem("tokenBlog", response.data.Table[0].token);
    navigate("/")
  }
});
}
const handleEmail= (e) => {
  setEmail(e.target.value)
}
const handlePassword= (e) => {
  setPassword(e.target.value)
}

  return (
    <div className='container bg-secondary'>
      <div className='row justify-content-center align-items-center' style={{height:"80vh"}}>
        <div className='col-6 rounded shadow bg-light'>
      <form onSubmit= {handleSubmit}>
        <div>
          <label htmlFor="">{t("Login.email")}</label>
          <input type="email" value={email} onChange={handleEmail} required/></div>
          <div><label htmlFor="">{t("Login.password")}</label>
          <input type="password" value={password} onChange={handlePassword} required/>
          </div>
        <button type='submit'>{t("Login.connect")}</button>
      </form>
      {authError &&
      <h1 className='text-danger'>mauvais user ou mot de passe</h1>
      }
        </div>    
      </div>
    </div>
  )
}

export default Login
// required pour obliger a remplire le champ