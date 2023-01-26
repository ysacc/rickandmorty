import { Link } from "react-router-dom";
import styles from "./Card.module.css"
import { addFavorite,deleteFavorite } from "../../redux/actions";
import { useState} from "react";
import { connect, useDispatch, } from "react-redux";

export  function Card({myFavorites,name,species,gender,image,onClose,id}) {
   const [isFav,setIsFav] = useState(false);

   // useEffect(() => {
   //    myFavorites.forEach((fav) => {
   //       if (fav.id === id) {
   //          setIsFav(true);
   //       }
   //    });
   // }, [myFavorites]);
   const dispatch = useDispatch();
   
   const handleFavorite= ()=>{
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id));
      }
      if(!isFav){
         setIsFav(true);
         dispatch(addFavorite(name));
      }
   }

   return (
      <div className={styles.containt}>
         <div className={`${styles.card} d-flex flex-column `} >
         <div >
         {
            isFav ? (
               <button className={styles.favorite} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.favorite}onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={styles.button} onClick={onClose}>Cerrar</button>
         </div>
         <img className={`${styles.img} img-fluid`} src={image} alt="img" />
         <div className={`${styles.content}`}>
            <Link to={`/detail/${id}`}>
               <div className={styles.name}>{name}</div>
            </Link>
            <div className="">
               <div className={styles.species}>Species: {species}</div>
               <div className={styles.gender}>Gender : {gender}</div>
            </div>
         </div>
      </div>
      </div>
   );
}

export function mapDispatchToProps (dispatch){
   return{
   deleteFavorite :(id)=>dispatch(deleteFavorite(id)),
   addFavorite:(id)=>dispatch(addFavorite(id))
   }
}

export function mapStateToProps (state){
   return {
      myFavorites : state.myFavorites
   }
}


export default connect(mapStateToProps , mapDispatchToProps)(Card);

// export default function Card(props) {
//    return (
//       <body className={styles.body}>
//       <div className= {styles.card}>
//          <button className={styles.button} onClick={props.onClose}>X</button>
//          <div>
//          <h1 className={styles.h1}>{props.name}</h1>
//          </div>
//          <div>
//          <h2 className={styles.h2}>{props.species}</h2>
//          </div>
//          <div>
//          <h2 className={styles.h2}>{props.gender}</h2>
//          </div>
//          <img className={styles.ima} src={props.image} alt="img" />
//       </div>
//       </body>
//    );
// }

