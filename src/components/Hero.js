import '../components/Hero.css'
import heroLogo from '../assets/vibrating-headphone 1.png'
export default function Hero({heroText}) {
    return (
        <div className='hero'>
          <h1 className='hero_text'>{heroText}</h1>
          <img src={heroLogo} alt='hero_logo' className='hero_logo'/>
        </div>
    )
}