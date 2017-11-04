import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <ul className="navbar-nav">
                <li className="nav-item"><a  className="nav-link" href="/">New York Times</a></li>
                <li className="nav-item"><a href="/saved" className="nav-link">Saved Articles</a></li>
            </ul>
    </nav>

)

export default Navbar;