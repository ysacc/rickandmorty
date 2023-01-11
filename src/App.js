import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'
import Header from '../src/components/header'
import styles from "./components/bodyStyle.module.css"

function App () {
  return (
    <body className={styles.containt}>
    <div className= {styles.App}>
      <Header />
      <div className = {styles.barra}>
        <SearchBar 
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
      <div className={styles.div_body}>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div >
      
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
