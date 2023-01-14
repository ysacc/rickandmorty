import { useState } from "react";
import styles from "../Nav/Nav.module.css"

export default function SearchBar({onSearch}) {
   const[character,setCharacter]=useState("")

   const HandleChange = (event )=>{
      setCharacter(event.target.value)
   }
   return (
      <div className= {styles.search}>
         <input type='search' value={character} onChange={HandleChange} />
         <button onClick={()=>onSearch(character)}>Agregar</button>
      </div>
   );
}
