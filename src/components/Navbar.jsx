import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";


import {FaBars, FaTimes} from "react-icons/fa";
import {IconContext} from "react-icons/lib";
import {NavLink} from "react-router-dom";




function Navbar () {
    const [click, setClick] = useState (false);

    const handleClick = () => setClick (!click);
    const closeMobileMenu = () => setClick (false);
    return (
    <>
    <IconContext.Provider value={{ color: "#F4F5F6"}}>
    
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                   
                Andrew Firman
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click? "nav-menu active" : "nav-menu"}>
                
                    <li className="nav-items">
                        <NavLink to="/work" className={({ isActive }) =>
                         "nav-links" + (isActive ? " activated" : "")}
                         onClick={closeMobileMenu}
                         >
                            Work
                        </NavLink>
                    </li>  
                    <li className="nav-items">
                        <NavLink to="/about" className={({ isActive }) =>
                         "nav-links" + (isActive ? " activated" : "")}
                         onClick={closeMobileMenu}
                         >
                            About
                        </NavLink>
                    </li>    
                    <li className="nav-items">
                        <NavLink to="/notebook" className={({ isActive }) =>
                         "nav-links" + (isActive ? " activated" : "")}
                         onClick={closeMobileMenu}
                         >
                            Notebook
                        </NavLink>
                    </li>
                    <li className="nav-items">
                        <NavLink to="/contact" className={({ isActive }) =>
                         "nav-links" + (isActive ? " activated" : "")}
                         onClick={closeMobileMenu}

                         >
                            Contact
                        </NavLink>
                    </li>
                </ul>   
            </div>
        </nav>
    </IconContext.Provider>
    </>
    )
}
export default Navbar;
