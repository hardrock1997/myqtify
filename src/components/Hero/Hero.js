import styles from './Hero.module.css'
import heroLogo from '../../assets/heroPhoto.png';
export default function Hero({heroText}) {
    return (
      <div className={styles.wrapper}>
        <div>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
          <img src={heroLogo} alt='hero_logo' width={212}/>
        </div>
      </div>
    )
}