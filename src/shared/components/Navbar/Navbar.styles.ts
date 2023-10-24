import styled from "styled-components";
import { Flag } from "../../../declarations/models.t";

const Nav = styled.nav`
  background-color: transparent;
  color:  #3c6390;
  padding: 15px;
`;

const BurgerIcon = styled.div`
  cursor: pointer;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavTitle = styled.h1`
  margin: 0;
`;

const NavMenu = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #444;
    padding: 10px;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const LanguageSelect = styled.select`
  margin-left: 10px;
`;

const LanguageOption = styled.option<Flag>`
  padding-left: 20px;
  background-image: url(${(props) => props.flag});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: contain;
`;

export {
  Nav,
  NavContainer,
  NavTitle,
  NavMenu,
  NavItem,
  BurgerIcon,
  LanguageSelect,
  LanguageOption,
};
