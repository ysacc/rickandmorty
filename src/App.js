import Cards from './components/Cards/Cards.jsx'
import Nav from "../src/components/Nav/Nav.jsx"
import { useState,useEffect } from 'react'
import { Route,Routes,useNavigate , useLocation } from 'react-router-dom'
import About from './components/About/About.jsx'
import Detail from "./components/Detail/Detail.jsx"
import Form from './components/Form/Form'
// import { render } from '@testing-library/react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";



function App () {
  const[characters,setCharacters]= useState([]);
  const onSearch=(character) =>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
        } else {
            window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) =>{
    setCharacters(
      characters.filter(character => character.id !==id)
    )
  }
  const navigate = useNavigate();
  const location = useLocation();
  const [access,setAccess] = useState(false)
  const username = "mail@ggg.com";
  const password = "123456";

  function login (userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }
  useEffect(() => {
    !access && navigate('/');
  }, [access]);
  
  return (
    <div className='App' >
      {/* <h1 className="text-center mb-3">Characters</h1> */}
      {/* <div>
        <img scr="src/imagenes/logo3.png" />
      </div> */}
      {location.pathname !== "/" && <Nav  onSearch={onSearch}/>}
      {/* <Nav  onSearch={onSearch}/> */}
        <div className="container">
        <div className="row">
        <Routes>
          <Route exact path='/' element={<Form login={login}/>} />
          <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>} />
          <Route path='/about' element={<About/>} />
          <Route path='detail/:detailId' element={<Detail/>} />
        </Routes>
        </div>
        </div>
    </div>
  )
}


export default App;

{/* <body className={styles.containt}>
<div className= {styles.App}>
  <div className = {styles.barra}>
  </div>
      <div className={styles.div_body}>
      </div>
      <hr />
    </div>
    </body>  */}