import logo from '../assets/logo.png'
import '../components/Logo.css'

export default function Logo() {
    return (
        <img src={logo} alt="Qtify Logo" height={40} className='logo'/>
    )
}