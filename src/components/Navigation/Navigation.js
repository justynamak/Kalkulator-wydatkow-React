import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navigation = ({ colorTheme, lightenColor, click }) => {
  function handleClickItemMobile() {
    if (window.innerWidth < 1025) {
      click();
    }
  }
  return (
    <nav className="nav">
      <ul
        className="nav__list"
        style={{
          backgroundColor: `${colorTheme}`
        }}
      >
        <li>
          <NavLink
            to="/Kalkulator-wydatkow-React/o-aplikacji"
            activeClassName="activeItemNav"
            activeStyle={{ backgroundColor: `${lightenColor}`, color: "#000" }}
            onClick={handleClickItemMobile}
          >
            O aplikacji
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/Kalkulator-wydatkow-React/"
            activeClassName="activeItemNav"
            activeStyle={{ backgroundColor: `${lightenColor}`, color: "#000" }}
            onClick={handleClickItemMobile}
          >
            Kalkulator wydatków
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Kalkulator-wydatkow-React/ocena"
            activeClassName="activeItemNav"
            activeStyle={{ color: `${colorTheme}` }}
            activeStyle={{ backgroundColor: `${lightenColor}`, color: "#000" }}
            onClick={handleClickItemMobile}
          >
            Oceń aplikację
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Kalkulator-wydatkow-React/opinie"
            activeClassName="activeItemNav"
            activeStyle={{ color: `${colorTheme}` }}
            activeStyle={{ backgroundColor: `${lightenColor}`, color: "#000" }}
            onClick={handleClickItemMobile}
          >
            Opinie
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Kalkulator-wydatkow-React/ustawienia"
            activeClassName="activeItemNav"
            activeStyle={{ color: `${colorTheme}` }}
            activeStyle={{ backgroundColor: `${lightenColor}`, color: "#000" }}
            onClick={handleClickItemMobile}
          >
            Ustawienia
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
