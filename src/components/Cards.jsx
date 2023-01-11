import Card from './Card';
import styles from "./Cards.module.css"

export default function Cards(props) {
   const { characters } = props;
   return( 
   <div className= {styles.cards}>
      {
      characters.map(({name,species,gender,image,index}) => {
      return <Card
         key ={index}
         name={name}
         species={species}
         gender={gender}
         image={image}
         onClose={() => window.alert('Se Cerro')}
         />
      })
   }
   </div>
   )
}
