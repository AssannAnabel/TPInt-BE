import React from 'react';
import './Header.css';
import Navbar from './Navbar.jsx';



function Header({ children }) {
    return (
        <header className='header-format'>
            <img src="./public/agrotech-logo.png" alt="agrotech-logo" />
            <Navbar />
            {children}
        </header>
    )
}

export default Header;