import React from 'react';
import './Header.css';
import Navbar from './Navbar.jsx';



function Header({ children }) {
    return (
        <header className='header-format'>
            <img src="./agrotech-logo.png" alt="agrotech-logo" className='format-logo'/>
            <Navbar />
            {children}
        </header>
    )
}

export default Header;