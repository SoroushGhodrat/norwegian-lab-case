import React, { useEffect, useState } from "react";

// import HamburgerMenu from "../../../../assets/HamburgerMenu.svg";

import {
  Nav,
  NavContainer,
  NavTitle,
  NavMenu,
  NavItem,
  BurgerIcon,
} from "./Navbar.styles";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <Nav>
      <NavContainer>
        <NavTitle>Norwegian Lab Case</NavTitle>

        {isMobile && <BurgerIcon onClick={toggleMenu}> ☰ </BurgerIcon>}

        <NavMenu isOpen={isOpen}>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Services</NavItem>
          <NavItem>Contact</NavItem>
          <LanguageSelector />
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
