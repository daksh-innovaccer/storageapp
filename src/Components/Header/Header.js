import Navigation from "../Navigation/Navigation"
import styles from "./Header.module.css"
const Header = (props) => {
    return (
        <header className={styles.header}>
            <h1>Storage App</h1>
            <Navigation userLogState={props.userLoggedIn} userLogout={props.onLogoutClick}/>
        </header>
    )
}

export default Header