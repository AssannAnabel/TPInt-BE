import React from 'react';
import './Header.css';
import Navbar from './Navbar.jsx';
import { Link } from 'react-router-dom';



function Header({ children }) {
    return (
        <header className='header-format'>
            <Link to={'/'} ><img src="./agrotech-logo.png" alt="agrotech-logo" className='format-logo'/></Link> 
            <Navbar />
            {children}
        </header>
    )
}

export default Header;