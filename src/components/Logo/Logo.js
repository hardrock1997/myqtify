import logo from '../../assets/logo.png'
import styles from './Logo.module.css'

export default function Logo() {
    return (
        <img src={logo} alt="Qtify Logo" height={45} className={styles.logo} width={70}/>
    )
}