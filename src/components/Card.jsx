import styles from "./Card.module.css"

export default function Card(props) {
   return (
      <body className={styles.body}>
      <div className= {styles.card}>
         <button className={styles.button} onClick={props.onClose}>X</button>
         <div>
         <h1 className={styles.h1}>{props.name}</h1>
         </div>
         <div>
         <h2 className={styles.h2}>{props.species}</h2>
         </div>
         <div>
         <h2 className={styles.h2}>{props.gender}</h2>
         </div>
         <img className={styles.ima} src={props.image} alt="img" />
      </div>
      </body>
   );
}
