import React from "react";
import { NavLink, Link } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <>
      <header className="header">
          <Link to="/inicio">
            <img src="/images/logo.png" alt="logo"/>
          </Link>
          <input id="toggle" type="checkbox"/>
          <label id="burger" for="toggle"><i className="fas fa-bars"></i></label>
          <label id="close" for="toggle"><i className="fas fa-times fa-lg"></i></label>
        <nav className="navegacion">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activado" : "")}
                to="/inicio"
              >
                <strong>INICIO</strong>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activado" : "")}
                to="/about"
              >
                <strong>SOBRE MI</strong>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activado" : "")}
                to="/about"
              >
                <strong>SERVICIOS</strong>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activado" : "")}
                to="/portafolio"
              >
                <strong>PORTAFOLIO</strong>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activado" : "")}
                to="/contacto"
              >
                <strong>CONTACTO</strong>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <hr className='separador1'/>
    </>
  );
};
