import './App.css'
import Cards from './components/Cards/Cards.jsx'
import styles from "./components/Body/bodyStyle.module.css"
import Nav from "../src/components/Nav/Nav.jsx"
import { useState } from 'react'
import { Route,Routes,useLocation } from 'react-router-dom'
import About from './components/About/About.jsx'
import Detail from "./components/Detail/Detail.jsx"
import Form from './components/Form/Form'
// import { render } from '@testing-library/react'



function App () {
  const[characters,setCharacters]= useState([]);
  const location = useLocation();
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
  
  return (
    <body className={styles.containt}>
    <div className='App' style={styles.app}>
        <Nav  onSearch={onSearch}/>
        <Routes>
          <Route path='/' element={<Form/>} />
          <Route path='home' element={<Cards onClose={onClose} characters={characters}/>} />
          <Route path='about' element={<About/>} />
          <Route path='detail/:detailId' element={<Detail/>} />
        </Routes>
    </div>
    </body>
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