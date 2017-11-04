import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar navbar-toggleable-md navbar-light bg-dark">
  <button className="navbar-toggler bg-light navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/saved">Saved Articles</a>
      </li>
    </ul>
  </div>
</nav>

)

export default Navbar;