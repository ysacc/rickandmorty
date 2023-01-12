import SearchBar  from "./SearchBar";
import styles from "./Nav.module.css";

export default function Nav(){
    return(
        <div className={styles.Nav}>
        <SearchBar onSearch={(characterID) => window.alert(characterID)}/>
        
        </div>
    )
}