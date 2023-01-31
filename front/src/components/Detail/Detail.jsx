import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../Detail/Detail.module.css"

const Details = ()=>{
    const {detailId} = useParams();
    const [character , setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else {
                window.alert("No hay personajes con ese ID");
            }
        })
        .catch((err) => {
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});
    }, [detailId])

    return(
        <div className={styles.detail}>
            <button className={styles.button}>
                <Link to="/home" className={styles.link}>Back to th Characters</Link>
            </button>
            <img className={styles.img} src={character?.image} alt={character.name}/>
            <h2 className={styles.name}>{character?.name}</h2>
            <label className={styles.label}>Status</label>
            <h3 className={styles.estado}> {character?.status}</h3>
            <label className={styles.label}>Species</label>
            <h3 className={styles.estado}> {character?.species}</h3>
            <label className={styles.label}>Gender</label>
            <h3 className={styles.estado}> {character?.gender}</h3>
            <label className={styles.label}>Origin</label>
            <h3 className={styles.estado}> {character?.origin?.name}</h3>
            
        </div>
    )

}





export default Details;