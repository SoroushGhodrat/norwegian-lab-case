import {
  FooterContainer,
  CompanyDetaile,
  CopyRight,
  NavLink,
  Ul,
  Li,
  H4,
  Details,
  Summary,
  Register,
  Div,
} from "./Footer.styles.ts";
import { Link } from "react-router-dom";

import { getCurrentYear } from "../../../Util/Helper.ts";

import { View } from "../../../declarations/models.t.ts";
import { useState, useEffect } from "react";

const Footer = () => {
  const [view, setView] = useState<View>("desktop");

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setView("mobile");
    } else {
      setView("desktop");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <FooterContainer>
      {view === "desktop" && (
        <>
          <CompanyDetaile>
            <Div>
              <H4>About</H4>

              <Link to="/terms">
                <Li>
                  <NavLink> Terms and Conditions</NavLink>
                </Li>
              </Link>

              <Link to="/contact">
                <Li>
                  <NavLink>contact us</NavLink>
                </Li>
              </Link>

              <Link to="/about">
                <Li>
                  <NavLink>about us</NavLink>
                </Li>
              </Link>
            </Div>

            <Div>
              <H4>Services</H4>

              <Li>
                <NavLink target="_blank">our services</NavLink>
              </Li>

              <Li>
                <NavLink target="_blank">Leadership</NavLink>
              </Li>
              <Li>
                <NavLink target="_blank">Careers</NavLink>
              </Li>
            </Div>

            <Register>
              <H4>Get Updates Weekly</H4>
              <form>
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="sample@email.com"
                  required
                />
                <button type="submit">Register</button>
              </form>
            </Register>
          </CompanyDetaile>
          <CopyRight>
            <p>
              © {getCurrentYear()} Norwegian Lab Case. All rights reserved.
              <br />
              <Link to="/policy">
                <NavLink> Privacy Policy</NavLink> |
              </Link>
              <Link to="/terms">
                <NavLink> Terms and Conditions</NavLink>
              </Link>
            </p>
          </CopyRight>
        </>
      )}

      {view === "mobile" && (
        <>
          <Details>
            <Summary>About</Summary>
            <Ul>
              <Li>
                <NavLink>Our Story</NavLink>
              </Li>
              <Li>
                <NavLink href="#">Leadership</NavLink>
              </Li>
              <Li>
                <NavLink href="#">Careers</NavLink>
              </Li>
            </Ul>
          </Details>
          <Details>
            <Summary>Services</Summary>
            <Ul>
              <Li>
                <NavLink href="#">Web Design</NavLink>
              </Li>
              <Li>
                <NavLink href="#">Development</NavLink>
              </Li>
              <Li>
                <NavLink href="#">Hosting</NavLink>
              </Li>
            </Ul>
          </Details>
          <Register>
            <H4>Get Updates Weekly</H4>
            <form>
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="sample@email.com"
                required
              />
              <button type="submit">Register</button>
            </form>
          </Register>
          <CopyRight>
            <p>
              © {getCurrentYear()} Norwegian Lab Case. All rights reserved.
              <br />
              <Link to="/policy">
                <NavLink> Privacy Policy</NavLink> |
              </Link>
              <Link to="/terms">
                <NavLink> Terms and Conditions</NavLink>
              </Link>
            </p>
          </CopyRight>
        </>
      )}
    </FooterContainer>
  );
};

export default Footer;
