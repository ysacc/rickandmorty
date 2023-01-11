import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
   return (
      <div className= {styles.search}>
         <label>
         <input type='search' />
         <button onClick={() =>{props.onSearch("NO HAY NADA")}}>Buscar</button>
         </label>
      </div>
   );
}
