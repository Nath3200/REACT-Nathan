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
import WorkInProgress from './pages/WorkInProgress/WorkInProgress';
import List from './components/List/List';
import Toogle from './components/Toogle/Toogle';
import Metier from './components/Metier/Metier';
import Articles from './pages/Articles/Articles';

import UseEffectCompo from './pages/UseEffectCompo/UseEffectCompo';
import SetIntervalCompo from './pages/SetIntervalCompo/SetIntervalCompo';
import MouseMoove from './pages/MouseMoove/MouseMoove';

import PageUne from './components/PageUne/PageUne';
import ApiGeneral from './components/ApiGeneral/ApiGeneral';
import AxiosPost from './components/AxiosPost/AxiosPost';
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

import AddArticle from './pages/Articles/AddArticle';
import DeleteArticle from './pages/Articles/DeleteArticle';
import NavbarOffcanvas from 'react-bootstrap/esm/NavbarOffcanvas';
import DataTableBasique from './pages/DataTable/DataTableBasique';
import DataTableSort from './pages/DataTable/DataTableSort';
import DataTableFull from './pages/DataTable/DataTableFull';
import Login from './pages/Login/Login';

import HKbase from './pages/HookForm/HKbase';
import HookSelect from './pages/HookForm/HookSelect';
import HfBlur from './pages/HookForm/HfBlur';
import FormikExemple from './pages/HookForm/FormikExemple';

import FilterSection from './pages/FilterSection/FilterSection';
import FilterSearch from './pages/FilterSection/FilterSearch';
import FindSection from './pages/FilterSection/FindSection';

import UseReducerSection from './pages/UseReducerSection/UseReducerSection';
import UseReducerAdvanced from './pages/UseReducerAdvanced/UseReducerAdvanced';
import UseMemoSectionAdvanced from './pages/UseMemoSection/UseMemoSectionAdvanced';
import UseCallBack from './pages/UseCallBack/UseCallBack';

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
        <Route path="/WorkInProgress" element={<WorkInProgress/>}/>

        <Route path="/UseEffectCompo" element={<UseEffectCompo/>}/>
        <Route path="/SetIntervalCompo" element={<SetIntervalCompo/>}/>
        <Route path="/MouseMoove" element={<MouseMoove/>}/>
        
        <Route path="/PageUne" element={<PageUne/>}/>     
        <Route path="/ApiGeneral" element={<ApiGeneral/>}/>
        <Route path="/AxiosPost" element={<AxiosPost/>}/>
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

        <Route path="/AddArticle" element={<AddArticle/>}/>
        <Route path="/DeleteArticle" element={<DeleteArticle/>}/>
        
        <Route path="/Login" element={<Login/>}/>

        <Route path="/NavbarOffcanvas" element={<NavbarOffcanvas/>}/>
        <Route path="/DataTableBasique" element={<DataTableBasique/>}/>
        <Route path="/DataTableSort" element={<DataTableSort/>}/>
        <Route path="/DataTableFull" element={<DataTableFull/>}/>
        
        <Route path="/HKbase" element={<HKbase/>}/>
        <Route path="/HookSelect" element={<HookSelect/>}/>
        <Route path="/HfBlur" element={<HfBlur/>}/>
        <Route path="/FormikExemple" element={<FormikExemple/>}/>    

        <Route path="/FilterSection" element={<FilterSection/>}/>
        <Route path="/FilterSearch" element={<FilterSearch/>}/>
        <Route path="/FindSection" element={<FindSection/>}/>

        <Route path="/UseReducerSection" element={<UseReducerSection/>}/>
        <Route path="/UseReducerAdvanced" element={<UseReducerAdvanced/>}/>
        <Route path="/UseMemoSectionAdvanced" element={<UseMemoSectionAdvanced/>}/>
        <Route path="/UseCallBack" element={<UseCallBack/>}/>
       
        <Route path="*" element={<PageError/>}/>
     </Routes>

  );
  // <Counter/>
  // <Toogle/>
  // <List/> 
  // <Metier/>
}
export default App;
