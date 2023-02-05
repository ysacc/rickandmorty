import Card from '../Card/Card';
import styles from "./Cards.module.css"

export default function Cards({characters , onClose}) {
   return( 
   <div>
      <h2 className={styles.title}>Cards</h2>
      <div className={styles.cards}>
      {
      characters.map(({id,name,species,gender,image},index) => {
      return <Card
         id ={id}
         name={name}
         species={species}
         gender={gender}
         image={image}
         key={id}
         onClose={()=> onClose(id)}
         />
      })
   }
   </div>
   </div>
   )
}
