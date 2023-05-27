import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* Container wrapper */}
      <div className="container">
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar brand */}
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="/WG-Logo.png"
              height={50}
              alt="MDB Logo"
              loading="lazy"
            />
            
            <h1 style={{color:"green"}}>WEBGENIE</h1>
          </a>
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/home">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/about">
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/contact">
                CONTACT US
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item me-4">
              <NavLink className="btn btn-outline-white" to="/main/signup">
                SignUp
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-outline-white" to="/main/signin">
                Signin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Container wrapper */}
    </nav>
  );
};

export default Header;
