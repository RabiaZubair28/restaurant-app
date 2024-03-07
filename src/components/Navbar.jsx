import React, { useState } from "react";

import "../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <div className="logo">
            <span className='explorer' style={{color: "#ffa500"}}>RailFood</span>
            <span className='raw raw2'  style={{color:"black"}}>-Services</span>
        </div>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">
          <i class="ri-mobile-download-line" style={{fontSize:"25px", color:"orange", marginInline:"10px"}}></i>
            Download App</NavLink>
        </li>
        <li>
          <NavLink to="/services">
          <i class="ri-group-line" style={{fontSize:"25px", color:"orange", marginInline:"10px"}}></i>Group Orders</NavLink>
        </li>
        <li>
          <NavLink to="/contact"><i class="ri-user-add-line" style={{fontSize:"25px", color:"orange", marginInline:"10px"}}></i>Account</NavLink>
        </li>
      </ul>
    </nav>
  );
};