import React from "react";
import { Link } from "react-router-dom";

import { NavBarLogo } from "./NavBarLogo";

import "../styles/NavBar.css";

export const NavBar: React.FC = () => {
  return (
    <div className="navbar_container">
      <Link to="/">
        <NavBarLogo />{" "}
      </Link>
      <nav>
        <ul className="nav_links">
          <li>
            <Link to="/shonenjump" className="nav_link">
              Shonen Jump{" "}
            </Link>
          </li>
          <li>
            <Link to="/noticias" className="nav_link">
              Noticias{" "}
            </Link>
          </li>
          <li>
            <Link to="/calendario" className="nav_link">
              Calendario
            </Link>
          </li>
          <li>
            <Link to="/ofertas" className="nav_link">
              Ofertas
            </Link>
          </li>
        </ul>
      </nav>
      <Link className="login_register_link" to="/login">
        <i className="fas fa-user-circle fa-lg login_icon"></i>
        <span className="login_register">Ingresar/Unirse</span>
      </Link>
    </div>
  );
};
