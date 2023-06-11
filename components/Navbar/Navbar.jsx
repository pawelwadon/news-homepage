import { useState } from 'react';
import logo from './assets/logo.svg';
import menuIcon from './assets/icon-menu.svg';
import closeMenuIcon from './assets/icon-menu-close.svg';
import './Navbar.css'

const Navbar = ()=>{

const [isActive, setActive] = useState(false);


const hamburger = isActive ? closeMenuIcon : menuIcon;

return(
    <nav className='navbar'>
    <img src={logo} alt='logo' className='logo'/>
            <div className={ !isActive ? 'menu' : 'hamburger-menu'}>
                <ul className='menu-elements'>
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </div>
        <img src={hamburger} className='menu-icon' onClick={() => setActive(!isActive)}/>
    </nav>
)

}

export default Navbar