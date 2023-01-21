import SearchBar  from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link, Route } from "react-router-dom";
// import { IconName } from "react-icons/fa";
import 'boxicons';


export default function Nav({onSearch}){
    return(
        <nav className={styles.nav}>
            <Link to ="/" className={styles.link} ><box-icon name='log-out-circle' animation='tada' color='#bf0e0e' size="md"></box-icon> Logout</Link>
            <Link to ="/Home" className={styles.link}  ><box-icon name='home-smile' animation='burst' color='#1b31e0' size="md"></box-icon> Home</Link>
            
            <Link to ="/Favorites" className={styles.link}><box-icon name='heart-circle' animation='spin' color='#d61717' size="md" ></box-icon> Favorites</Link>
            
            <Link to ="/About" className={styles.link}><box-icon name='cool' animation='flashing' color='#1b45d8'size="md" ></box-icon> About</Link>
            <SearchBar onSearch={onSearch}/>
            
        </nav>
    )
}
