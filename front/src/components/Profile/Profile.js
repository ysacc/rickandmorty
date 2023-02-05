import styles from "../Profile/Profile.module.css"
import {useSelector} from "react-redux"
import Nav from "../Nav/Nav"

export default function Profile(){
    let {profile} = useSelector(state=>state)
    return(
        <>
            <Nav/>
            <div className={styles.container}>
                <h1 className={styles.subtitle}>User Profile</h1>
                <div className={styles.card}>
                    {/* <img src={profile.image} className={styles.image}/> */}
                    <ul>
                        <h1 className={styles.name}>{profile.name}</h1>
                        <li className={styles.age}>{profile.age} years old</li>
                        <li className={styles.country}>From {profile.country}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}