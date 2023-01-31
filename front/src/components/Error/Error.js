// import Navbar from "../Navbar/Navbar"
import styles from "./Error.module.css"

export default function Error(){

    return(
        <div className={styles.divContainer}>
            {/* <Navbar/> */}
            <div className={styles.error_container}>
                <h1 className={styles.error_mainText}>Page not found</h1>
                <p className={styles.error_incorrectText}>This URL is incorrect</p>
            </div>
        </div>
    )
}