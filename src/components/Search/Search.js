import styles from './Search.module.css'
import searchIcon from '../../assets/Searchicon.png';
export default function Search({placeholderText}) {
    return (
        <div className={styles.input_container}>
        <input type="search" placeholder={placeholderText} className={styles.input} required/>
        <button className={styles.search_button}>
            <img src={searchIcon}
            alt='searchIcon'
            width={20}
            height={20}
            />
        </button>
        </div>
    )
}