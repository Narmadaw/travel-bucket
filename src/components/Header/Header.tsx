import logo from './../../assets/travel-logo.jpg'
import './Header.scss'
const Header = () =>{
    return(
        <header className='header'>
            <nav className='navbar'>
                <div className='navbar__logo-container'>
                    <img className='navbar__logo' src={logo} alt="travel logo" />
                </div>
                <div className='navbar__menu-container'>
                    <ul className='navbar__menu-list'>
                        <li className='navbar__menu-list-item'>Home</li>
                        <li className='navbar__menu-list-item'>Sign In</li>
                        <li className='navbar__menu-list-item'>Sign Up</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header