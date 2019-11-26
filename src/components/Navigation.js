import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

const Navigation = ({ colorTheme }) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <NavLink
            to="/o-mnie"
            activeClassName="activeItemNav"
            activeStyle={{ color: `${colorTheme}` }}
          >
            O aplikacji
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Kalkulator-wydatkow-React/"
            activeClassName="activeItemNav"
            activeStyle={{ color: `${colorTheme}` }}
          >
            Kalkulator wydatków
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rating"
            activeClassName="activeItemNav"
            activeStyle={{ color: `${colorTheme}` }}
          >
            Oceń aplikację
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ustawienia"
            activeClassName="activeItemNav"
            activeStyle={{ color: `${colorTheme}` }}
          >
            Ustawienia
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName="activeItemNav"
            activeStyle={{ color: `${colorTheme}` }}
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
