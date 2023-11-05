import '../components/Navbar.css'
import Logo from './Logo'
import Button from '../components/Button'
import Search from './Search'

export default function Navbar() {
    return (
     <nav className='nav'>
        <Logo/>
        <Search/>
        <Button text='Give Feedback'/>
     </nav>
    )
}