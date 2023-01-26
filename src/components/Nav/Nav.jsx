import SearchBar  from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
// import { IconName } from "react-icons/fa";
import 'boxicons';


export default function Nav({onSearch}){
    return(
        <nav className={styles.nav}>
            <a className={styles.logo} href>
            <img className={styles.img}  src="https://e7.pngegg.com/pngimages/479/224/png-clipart-rick-and-morty-rick-sanchez-rick-and-morty-season-3-adult-swim-rick-and-morty-season-2-episode-rick-and-morty-grass-fictional-character.png" alt="logo" /> 
            </a>
            <Link to ="/" className={styles.link} ><box-icon name='log-out-circle' animation='tada' color='#bf0e0e' size="md"></box-icon> Logout</Link>
            <Link to ="/Home" className={styles.link}  ><box-icon name='home-smile' animation='burst' color='#1b31e0' size="md"></box-icon> Home</Link>
            <Link to ="/Favorites" className={styles.link}><box-icon name='heart-circle' animation='spin' color='#d61717' size="md" ></box-icon> Favorites</Link>
            <Link to ="/About" className={styles.link}><box-icon name='cool' animation='flashing' color='#1b45d8'size="md" ></box-icon> About</Link>
            <a href="https://github.com/ysacc" className={styles.link} target="blank"><box-icon name='github' type='logo' animation='fade-right'size="md" ></box-icon> GitHub</a>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}
