import React, { useState } from "react";
import { Nav, NavLink, Div, Brand } from "./Navbar.styles";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isChecked, setIsChecked] = useState(false);

  const handleMenuClick = () => {
    setIsChecked(!isChecked);
  };

  const handleMenuItemClick = () => {
    setIsChecked(false);
  };

  return (
    <Nav>
      <input
        type="checkbox"
        id="check"
        checked={isChecked}
        onChange={handleMenuClick}
      />

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
        <Link to="/" onClick={handleMenuItemClick}>
          <NavLink className="nav-link nav-link-grow-up">
            {t("localization:home")}
          </NavLink>
        </Link>
        <Link
          className="nav-link nav-link-grow-up"
          to="/about"
          onClick={handleMenuItemClick}
        >
          <NavLink className="nav-link nav-link-grow-up">
            {t("localization:about")}
          </NavLink>
        </Link>
        <Link
          className="nav-link nav-link-grow-up"
          to="/contact"
          onClick={handleMenuItemClick}
        >
          <NavLink className="nav-link nav-link-grow-up">
            {t("localization:contact")}
          </NavLink>
        </Link>

        <LanguageSelector />
      </Div>
    </Nav>
  );
};

export default Navbar;
