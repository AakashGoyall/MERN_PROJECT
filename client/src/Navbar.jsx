import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <>

            <div className="header">
                <div className="col1">MERN_PROJECT</div>
                <div className="col2">
                    <ul>
                        <li>
                            <NavLink className= "NavLink" to="/">Home</NavLink>

                        </li>
                        <li>
                            <NavLink className= "NavLink" to="/register">Register</NavLink>
                        </li>
                        <li>
                            <NavLink className= "NavLink" to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink className= "NavLink" to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink className= "NavLink" to="/logout">Logout</NavLink>
                        </li>

                    </ul>
                </div>
            </div>






        </>
    )
}

export default Navbar
