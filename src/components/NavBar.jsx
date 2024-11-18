import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="src/assets/icons8-tienda-100.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                    Tiendota
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className='nav-item' to='/Inicio'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-item' to='/Productos'>Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-item' to='/Servicios'>Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-item' to='/Contacto'>Contactanos</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget contador = {0}></CartWidget>
            </div>
        </nav>
    );
};


export default Navbar;
