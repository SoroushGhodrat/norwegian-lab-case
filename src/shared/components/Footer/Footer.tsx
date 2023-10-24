import {
  FooterContainer,
  CompanyDetaile,
  CopyRight,
  Link,
  Ul,
  Li,
  H4,
  Details,
  Summary,
  Register,
  Div,
} from "./Footer.styles.ts";

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
              <Ul>
                <Li>
                  <Link href="#">Our Story</Link>
                </Li>
                <Li>
                  <Link href="#">Leadership</Link>
                </Li>
                <Li>
                  <Link href="#">Careers</Link>
                </Li>
                <Li>
                  <Link href="#">About Us</Link>
                </Li>
              </Ul>
            </Div>

            <div>
              <H4>Services</H4>
              <Ul>
                <Li>
                  <Link href="#">Our Story</Link>
                </Li>
                <Li>
                  <Link href="#">Leadership</Link>
                </Li>
                <Li>
                  <Link href="#">Careers</Link>
                </Li>
                <Li>
                  <Link href="#">Press</Link>
                </Li>
              </Ul>
            </div>

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
              © {getCurrentYear()} Norwegian Lab Case. All rights reserved.{" "}
              <br />
              <Link href="#"> Privacy Policy</Link> |
              <Link href="#"> Terms and Conditions</Link>
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
                <Link href="#">Our Story</Link>
              </Li>
              <Li>
                <Link href="#">Leadership</Link>
              </Li>
              <Li>
                <Link href="#">Careers</Link>
              </Li>
            </Ul>
          </Details>
          <Details>
            <Summary>Services</Summary>
            <Ul>
              <Li>
                <Link href="#">Web Design</Link>
              </Li>
              <Li>
                <Link href="#">Development</Link>
              </Li>
              <Li>
                <Link href="#">Hosting</Link>
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
              © {getCurrentYear()} Norwegian Lab Case. All rights reserved.{" "}
              <br />
              <Link href="#"> Privacy Policy</Link> |
              <Link href="#"> Terms and Conditions</Link>
            </p>
          </CopyRight>
        </>
      )}
    </FooterContainer>
  );
};

export default Footer;
