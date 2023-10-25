import React, { useEffect, useState } from "react";
import { Nav, NavLink, Div, Brand } from "./Navbar.styles";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { Link } from "react-router-dom";


import "./style.css";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {

  const { i18n, t } = useTranslation();







  return (
    <Nav>
      <input type="checkbox" id="check" />

      <Link to="/">
        <Brand>
          <span>Norwegian Lab Case</span>
        </Brand>
      </Link>

      <Div className="menu-btn">
        <label htmlFor="check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </Div>

      <Div className="menu-item">
        <Link to="/">
          <NavLink className="nav-link nav-link-grow-up">{t("localization:home")}</NavLink>
        </Link>
        <Link className="nav-link nav-link-grow-up" to="/about">
          <NavLink className="nav-link nav-link-grow-up">{t("localization:about")}</NavLink>
        </Link>
        <Link className="nav-link nav-link-grow-up" to="/contact">
          <NavLink className="nav-link nav-link-grow-up">{t("localization:contact")}</NavLink>
        </Link>

        <LanguageSelector />
      </Div>
    </Nav>
  );
};

export default Navbar;
