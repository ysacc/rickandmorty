import SearchBar  from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link, Route } from "react-router-dom";


export default function Nav({onSearch}){
    return(
        <nav className={styles.nav}>
            <Link to ="/" className={styles.link} >Logout</Link>
            <Link to ="/Home" className={styles.link}  >Home</Link>
            <Link to ="/About" className={styles.link}>About</Link>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}