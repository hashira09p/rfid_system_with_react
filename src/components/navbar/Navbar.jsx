import React, { useState, useTheme } from "react";
import "./Navbar.css";
import logo_dark from "../../assets/logo-white.png";
import logo_white from "../../assets/logo-black.png";
import search_icon_light from "../../assets/search-b.png";
import search_icon_dark from "../../assets/search-w.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";

const Navbar = ({ theme, setTheme }) => {

  const toggle_model = () => {
    theme == "light" ? setTheme('dark') : setTheme('light');
  }


  return (
    <div className="navbar">
      <img src={theme == "light" ? logo_white : logo_dark} alt="" className="logo" />
      <ul className={theme == "dark" ? "color-white" : "color-black"}>
        <li>Home</li>
        <li>Cards</li>
        <li>Schedules</li>
      </ul>

      <div className={`search-box ${theme}`}>
        <input type="text" placeholder="Search" className={`input-${theme}`} />
        <img src={theme == "light" ? search_icon_dark : search_icon_light} alt="" />
      </div>

      <img src={theme == "light" ? toggle_light : toggle_dark} alt="" className="toggle-icon" onClick={toggle_model} />
    </div>
  )
};

export default Navbar;