import { useState } from "react";


export default function SearchBar({onSearch}) {
   const[character,setCharacter]=useState("")

   const HandleChange = (event )=>{
      setCharacter(event.target.value)
   }
   return (
      <div >
         <input type='search' value={character} onChange={HandleChange} />
         <button onClick={()=>onSearch(character)}>Agregar</button>
      </div>
   );
}
