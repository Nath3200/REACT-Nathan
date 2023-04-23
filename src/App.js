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

import UseEffectCompo from './pages/UseEffectCompo/UseEffectCompo';

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

        <Route path="/UseEffectCompo" element={<UseEffectCompo/>}/>
        <Route path="/Projet" element={<Projet/>}/>
        
        <Route path="*" element={<PageError/>}/>
  </Routes>

  );
  // <Counter/>
  // <Toogle/>
  // <List/> 
  // <Metier/>
}
export default App;
