// une fois le fichier Introduction cree et separe du App.js, il faut l importer et l introduire en dur comme ici ligne 3 et 15.
// REACT  n aime pas les href vide, mettre un / pour combler le vide comme ligne 32.
// REACT  n aime pas que dans <img le alt indique Image.
// pour ouvrir le projet : aller dans terminal - new terminal - ecrire npm run start - 

import './App.css';
import Cv from './pages/Cv/Cv';
import { Routes, Route } from 'react-router-dom';
import PageError from './pages/PageError/PageError';
import Blog from './pages/Blog/Blog';
import Counter from './components/Counter/Counter';
import Projet from './pages/Projet/Projet';
import List from './components/List/List';
import Toogle from './components/Toogle/Toogle';
import Metier from './components/Metier/Metier';
import Articles from './pages/Articles/Articles';

import UseEffectCompo from './pages/UseEffectCompo/UseEffectCompo';
import SetIntervalCompo from './pages/SetIntervalCompo/SetIntervalCompo';
import MouseMoove from './pages/MouseMoove/MouseMoove';


import PageUne from './components/PageUne/PageUne';
import AddArticle from './components/AddArticle/AddArticle';
import ApiGeneral from './components/ApiGeneral/ApiGeneral';
import AxiosGet from './components/AxiosGet/AxiosGet';
import AxiosPost from './components/AxiosPost/AxiosPost';
import DeleteArticle from './components/DeleteArticle/DeleteArticle';
import GetArticle from './components/GetArticle/GetArticle';
import GetArticleById from './components/GetArticleById/GetArticleById';
import LinkExplication from './components/LinkExplication/LinkExplication';
import RouteDyn from './components/RouteDyn/RouteDyn';
import RouterGeneral from './components/RouterGeneral/RouterGeneral';
import StyleBackTik from './components/StyleBackTik/StyleBackTik';
import StyleFonction from './components/StyleFonction/StyleFonction';
import StyleGeneral from './components/StyleGeneral/StyleGeneral';
import StyleSepare from './components/StyleSepare/StyleSepare';
import UseLocation from './components/UseLocation/UseLocation';



function App() {
  // les PROPS sert a utiliser une valeur plusieurs fois, on doit declarer un usestate avec usf
  // fa = fonction flechee

  return (
      <Routes>
        <Route index element={<Projet/>}/>
        <Route path="/cv" element={<Cv/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/Counter" element={<Counter/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/Toogle" element={<Toogle/>}/>
        <Route path="/Metier" element={<Metier/>}/>
        <Route path="/article/:id" element={<Articles/>}/>
        <Route path="/Projet" element={<Projet/>}/>

        <Route path="/UseEffectCompo" element={<UseEffectCompo/>}/>
        <Route path="/SetIntervalCompo" element={<SetIntervalCompo/>}/>
        <Route path="/MouseMoove" element={<MouseMoove/>}/>
        
        <Route path="/PageUne" element={<PageUne/>}/>
        <Route path="/AddArticle" element={<AddArticle/>}/>
        <Route path="/ApiGeneral" element={<ApiGeneral/>}/>
        <Route path="/AxiosGet" element={<AxiosGet/>}/>
        <Route path="/AxiosPost" element={<AxiosPost/>}/>
        <Route path="/DeleteArticle" element={<DeleteArticle/>}/>
        <Route path="/GetArticle" element={<GetArticle/>}/>
        <Route path="/GetArticleById" element={<GetArticleById/>}/>
        <Route path="/LinkExplication" element={<LinkExplication/>}/>
        <Route path="/RouteDyn" element={<RouteDyn/>}/>
        <Route path="/RouterGeneral" element={<RouterGeneral/>}/>
        <Route path="/StyleBackTik" element={<StyleBackTik/>}/>
        <Route path="/StyleFonction" element={<StyleFonction/>}/>
        <Route path="/StyleGeneral" element={<StyleGeneral/>}/>
        <Route path="/StyleSepare" element={<StyleSepare/>}/>
        <Route path="/UseLocation" element={<UseLocation/>}/>
        
       
        <Route path="*" element={<PageError/>}/>
     </Routes>

  );
  // <Counter/>
  // <Toogle/>
  // <List/> 
  // <Metier/>
}
export default App;
