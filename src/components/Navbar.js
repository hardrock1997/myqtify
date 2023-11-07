import '../components/Navbar.css'
import Logo from './Logo'
import Button from '../components/Button'
import Search from './Search'
import Hero from './Hero'

export default function Navbar() {
    return (
    <>
     <nav className='nav'>
        <Logo/>
        <Search placeholderText='Search a album of your choice'/>
        <Button text='Give Feedback'/>
     </nav>
     <Hero heroText='100 Thousand Songs,ad-free Over thousands podcast episodes'/>
    </>
    )
}