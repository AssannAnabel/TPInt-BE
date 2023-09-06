import { React } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
//import { useNavigate } from 'react-router-dom';

function Navbar() {
    //const navigate = useNavigate()
    return (
        <nav>
            <ul>
                <li><Link>Nosotros</Link></li>
                <li><Link to={'/LoadInvtry'}>Agregar ítem</Link></li>
                <li><Link>Productos</Link></li>
                <li><Link to={"/Login"}>Acceso Usuarios</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;