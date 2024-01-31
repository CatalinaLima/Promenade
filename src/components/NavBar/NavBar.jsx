import { useEffect } from 'react'
import './NavBar.css'
import {Link, useLocation, NavLink} from 'react-router-dom'



export default function NavBar() {

    let location = useLocation()
    useEffect (() => {
        window.scrollTo()
    }, [location])


    return (
        <nav className="NavBar">
            <ul className="nav-menu">
                <li className="logo">
                    <h2>
                        <Link to="/">
                            <img src="/assets/promenade.jpeg" alt="logo" />
                        </Link>
                    </h2>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Obras">
                        Obras
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Servicios">
                        Servicios
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Estudio">
                        Estudio
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contacto">
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </nav>
        );
    }






