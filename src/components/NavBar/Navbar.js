import styles from './Navbar.module.css'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import Search from '../Search/Search'
export default function Navbar() {
 return (
<>
     <nav className={styles.nav}>
        <Logo/>
        <Search placeholderText='Search a album of your choice'/>
        <Button text='Give Feedback'/>
     </nav>
</>
)}