import { Link } from "react-router-dom";
import styles from "./Card.module.css"


export default function Card({name,species,gender,image,onClose,id}) {
   return (
      <div className={styles.containt}>
      <div className={`${styles.card} d-flex flex-column `} >
         <button className={styles.button} onClick={onClose}>Cerrar</button>
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

