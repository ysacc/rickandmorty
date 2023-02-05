// import styles from "../Home/Home.module.css"
// import {NavLink} from "react-router-dom"
// import { useSelector } from "react-redux"
// import Nav from "../Nav/Nav"

// //**** ANIMACION ROTACION PORTALES *****/

// export default function Home(){
//     return(
//     <div>
//         <div className={styles.intro}>
//             <div className={styles.intro_container}>
//                 <img className={styles.intro_logo} src={require()} alt="logo"/>
//                 {/* Portals - links to other sections in the intro */}
//                 <div className={styles.intro_portalsContainer}>
//                     <NavLink className={styles.intro_portalLink} to="/">
//                         <img className={styles.intro_portalImg} src={require()} alt="logo"/>
//                         <label className={`${styles.intro_string} ${styles.change_account_portal}`}>Change<br></br>account</label>
//                     </NavLink>
//                     <NavLink className={styles.intro_portalLink} to="/characters">
//                         <img className={styles.intro_portalImg} src={require()} alt="logo"/>
//                         <label className={`${styles.intro_string} ${styles.characters_portal}`}>Characters</label>
//                     </NavLink>
//                     <NavLink className={styles.intro_portalLink} to="/about">
//                         <img className={styles.intro_portalImg} src={require()} alt="logo"/>
//                         <label className={`${styles.intro_string} ${styles.about_portal}`}>About</label>
//                     </NavLink>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }