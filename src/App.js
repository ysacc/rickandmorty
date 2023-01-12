import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'
import Header from '../src/components/header'
import styles from "./components/bodyStyle.module.css"
import Nav from "../src/components/Nav.jsx"

function App () {
  return (
    <body className={styles.containt}>
    <div className= {styles.App}>
      <Header />
      <div className = {styles.barra}>
        <Nav/>
      </div>
      <div className={styles.div_body}>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
    </div>
    </body>
  )
}

export default App
