import { Link } from "react-router-dom";
import styles from "./Card.module.css"
import { addFavorite,deleteFavorite } from "../../redux/actions";
import { useState} from "react";
import { connect, useDispatch, } from "react-redux";
import { useEffect } from "react";

export  function Card(props) {
   const [isFav,setIsFav] = useState(false);

   useEffect(() => {
      (props.myFavorites)?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.myFavorites]);

   const dispatch = useDispatch();
   
   const handleFavorite= ()=>{
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(props.id));
      }
      if(!isFav){
         setIsFav(true);
         dispatch(addFavorite(props.id));
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
               <button className={styles.favorite} onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={styles.button} onClick={props.onClose}>Close</button>
         </div>
         <img className={`${styles.img} img-fluid`} src={props.image} alt="img" />
         <div className={`${styles.content}`}>
            <Link to={`/detail/${props.id}`}>
               <div className={styles.name}>{props.name}</div>
            </Link>
            <div className="">
               <div className={styles.species}>Species: {props.species}</div>
               <div className={styles.gender}>Gender : {props.gender}</div>
            </div>
         </div>
      </div>
      </div>
   );
}

export function mapDispatchToProps (dispatch){
   return{
   addFavorite:(id)=>dispatch(addFavorite(id)),
   deleteFavorite :(id)=>dispatch(deleteFavorite(id))
   }
}

export function mapStateToProps (state){
   return {
      myFavorites : state.myFavorites
   }
}


export default connect(mapStateToProps , mapDispatchToProps)(Card);