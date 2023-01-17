import { useState } from "react";
import styles from "../Nav/Nav"


export default function SearchBar({onSearch}) {
   const[character,setCharacter]=useState("")

   const HandleChange = (event )=>{
      setCharacter(event.target.value)
   }
   return (
      <div >
         <input type='search' value={character} onChange={HandleChange} placeholder="Search for ID" className={styles.input} />
         <button onClick={()=>onSearch(character)}className={`${styles.btn} btn btn-primary fs-5`}>Agregar</button>
      </div>
   );
}
