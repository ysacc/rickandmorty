import Cards from './components/Cards/Cards.jsx'
import Nav from "../src/components/Nav/Nav.jsx"
import { useState,useEffect } from 'react'
import { Route,Routes,useNavigate , useLocation } from 'react-router-dom'
import About from './components/About/About.jsx'
import Detail from "./components/Detail/Detail.jsx"
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Favorites from "./components/Favorites/Favorites"
// import { render } from '@testing-library/react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import styles from "./components/Nav/Nav.module.css";
import Player from './components/Player/Player.js'


function App () {
  const[characters,setCharacters]= useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [access,setAccess] = useState(false)
  const username = "mail@ggg.com";
  const password = "123456";

  
  const onSearch=(character) =>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if(!isRepetida(data.id)){
            setCharacters(oldChars => [...oldChars, data])
            } else {
                window.alert("No podes repetir personaje");
              }
            } else {
              window.alert("No hay personaje con ese ID");
            }
          });
        }
    function isRepetida(id) {
    let aux = false;
    characters.forEach((character) => {
        if(character.id === id) aux = true;
      });
    return aux;
    }

  const onClose = (id) =>{
    setCharacters(
      characters.filter(character => character.id !==id)
    )
  }
  function login (userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }
  useEffect(() => {
    !access && navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);
  
  return (
    <div className='App' >
      {/* <h1 className="text-center mb-3">Characters</h1> */}
      <Header/>
      {location.pathname !== "/" && <Nav  onSearch={onSearch}/>}
      {/* <Nav  onSearch={onSearch}/> */}
        <div className="container">
        <div className="row">
        <Routes>
          <Route exact path='/' element={<Form login={login}/>} />
          <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/favorites' element={<Favorites/>} />
          <Route path='detail/:detailId' element={<Detail/>} />
        </Routes>
        </div>
        </div>
        <div>
        {location.pathname !== '/About' && <Player/>}
        </div>
        <footer className={styles.footer}>Create for Ysacc in Henry</footer>
    </div>
  )
}


export default App;