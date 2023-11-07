import logo from '../assets/logo.png'
import '../components/Logo.css'

export default function Logo() {
    return (
        <img src={logo} alt="Qtify Logo" height={45} className='logo'/>
    )
}