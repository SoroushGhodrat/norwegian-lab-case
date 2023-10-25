import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  border-bottom: 0.1px solid rgba(60, 99, 144, .1);
  position: relative;
  background-color: transparent;

  &.menu-btn {
    display: none;
  }

  & .menu-item {
    display: flex;
    float: right;
    font-size: 18px;
    position: absolute;
    right: 0px;
    top: 20px;
  }

  & #check {
    display: none;
  }

  @media (max-width: 800px) {

    & .menu-btn {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0px;
    }
    & .menu-btn label {
      display: inline-block;
      width: 30px;
      height: 20px;
      padding: 13px;
      transition: 1s;
      border-radius: 6px;
    }

    & .menu-btn label:hover,
    & #check:checked ~ .menu-btn label {
      background-color: #ccddff;
    }
    & .menu-btn label span {
      display: block;
      width: 25px;
      height: 5px;
      border-top: 2px solid #3c6390;
    }
    & .menu-item {
      position: absolute;
      display: block;
      width: 100%;
      background: rgba(0, 0, 0, 0.88);
      height: 200px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 50px;
      left: 0px;
      z-index: 2;
    }
    & #check:not(:checked) ~ .menu-item {
      height: 0px;
    }
    & #check:checked ~ .menu-item {
      text-align: center;
      height: calc(100vh - 50vh);
    }
  }
`;

export const NavLink = styled.a`
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  color: #3c6390;
  padding: 0;
  margin: 0px 20px;
  display: inline-block;
  position: relative;

  &.nav-link:hover {
    opacity: 1;
  }

  &.nav-link::before {
    transition: 300ms;
    height: 5px;
    content: "";
    position: absolute;
    background-color: #031d44;
  }

  &.nav-link-grow-up::before {
    height: 0%;
    width: 100%;
    bottom: 0px;
  }

  &.nav-link-grow-up:hover::before {
    height: 2px;
    align-items: center;
  }

  @media (max-width: 800px) {
    display: block;
    width: 100%;

    font-size: 30px;
    padding: 10px 0;
    margin: 0;
  }
`;

export const Div = styled.div`
  display: block;
`;

export const Brand = styled.h1`
  font-size: 30px;
  font-weight: bold;

  & span {
    color: #3c6390;
    padding-left: 10px;
  }
`;
