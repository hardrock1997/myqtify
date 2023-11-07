import '../components/Navbar.css'
import Logo from './Logo'
import Button from '../components/Button'
import Search from './Search'

export default function Navbar() {
    return (
     <nav className='nav'>
        <Logo/>
        <Search placeholderText='Search a album of your choice'/>
        <Button text='Give Feedback'/>
     </nav>
    )
}