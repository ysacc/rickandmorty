import logo from "../imagenes/logo3.png";
import styles from "./bodyStyle.module.css"

function Header() {
    return (
    <header className={styles.header}>
    <img className="header__image" src={logo} alt="logo rick and morty" />
    </header>
    );
}
export default Header;