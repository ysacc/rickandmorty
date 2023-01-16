import SearchBar  from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link, Route } from "react-router-dom";


export default function Nav({onSearch}){
    return(
        <nav>
            <Link to ="/Home">Home</Link>
            <Link to ="/About">About</Link>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}