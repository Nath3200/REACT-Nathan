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
 import Toogle from './components/Toogle/Toogle';
// import List from './components/List/List';
 import Metier from './components/Metier/Metier';

function App() {
  // les PROPS sert a utiliser une valeur plusieurs fois, on doit declarer un usestate avec usf

  return (
      <Routes>
        <Route index element={<Cv/>}/>
        <Route path="/home" element={<Cv/>}/>
        <Route path="/metier" element={<Metier/>}/>
        <Route path="/Toogle" element={<Toogle/>}/>
        <Route path="/Counter" element={<Counter/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="*" element={<PageError/>}/>
  </Routes>

  );
  // <Counter/>
  // <Toogle/>
  // <List/> 
  // <Metier/>
}
export default App;
