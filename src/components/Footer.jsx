import React from "react";
import {Link} from "react-router-dom";
import {IconContext} from "react-icons/lib";
import { IoLogoGithub } from "react-icons/io";

import {NavLink} from "react-router-dom";
import "./Footer.css";








function Footer () {

    return (
    <>
 <IconContext.Provider value={{ color: "#F4F5F6"}}>
   <footer className="footer-pinned">
         <Link to="/" className="footer-logo">
            Andrew Firman
         </Link>
         <div className="footer-links">
         <NavLink to="/Privacy">
            <small>Privacy</small>
            </NavLink>
            
            <a href="https://github.com"target="_blank">
            <IoLogoGithub size={20}/> 
             </a>
          
          </div>
      
   </footer>

</IconContext.Provider>
</>
)
}
export default Footer;