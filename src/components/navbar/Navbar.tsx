import { userNav } from './constants'
import styles from './_navbar.module.scss'

const Navbar: React.FC = () => {
    return (
        <>
            <ul className={styles.mainNav}>
                <a
                    className={styles.childNav}
                    href="https://vitejs.dev"
                    target="_blank"
                >
                    <img
                        className={styles.logoNav}
                        src="/vite.svg"
                        alt="Vite logo"
                    />
                </a>
                {userNav.map((nav: String) => {
                    return (
                        <li className={styles.childNav}>
                            <a className={styles.linkNav}>{nav}</a>
                        </li>
                    )
                })}
                <div className={styles.signNav}>Sign Up</div>
                <div className={styles.signNav}>Sign In</div>
            </ul>
        </>
    )
}

export default Navbar
