import { React } from "react";
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate()
    return (
        <nav>
            <button>Nosotros</button>
            <button>Contacto</button>
            <button>Productos</button>
            <button onClick={() => navigate('Login')}>Acceso Usuarios</button>
        </nav>
    )
}

export default Navbar;