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
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
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
              <H4>{t("localization:about")}</H4>

              <Link to="/terms">
                <Li>
                  <NavLink>{t("localization:terms")}</NavLink>
                </Li>
              </Link>

              <Link to="/contact">
                <Li>
                  <NavLink>{t("localization:contact")}</NavLink>
                </Li>
              </Link>

              <Link to="/about">
                <Li>
                  <NavLink>{t("localization:about")}</NavLink>
                </Li>
              </Link>
            </Div>

            <Div>
              <H4>{t("localization:service")}</H4>

              <Li>
                <NavLink target="_blank">
                  {t("localization:ourServices")}
                </NavLink>
              </Li>

              <Li>
                <NavLink target="_blank">
                  {t("localization:leadership")}
                </NavLink>
              </Li>
              <Li>
                <NavLink target="_blank">{t("localization:careers")}</NavLink>
              </Li>
            </Div>

            <Register>
              <H4>{t("localization:getUpdatesWeekly")}</H4>
              <form>
                <label htmlFor="email">{t("localization:email")}:</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="sample@email.com"
                  required
                />
                <button type="submit">{t("localization:register")}</button>
              </form>
            </Register>
          </CompanyDetaile>
          <CopyRight>
            <p>
              © {getCurrentYear()} Norwegian Lab Case. All rights reserved.
              <br />
              <Link to="/policy">
                <NavLink> {t("localization:privacyPolicy")}</NavLink> |
              </Link>
              <Link to="/terms">
                <NavLink>{t("localization:termsAndConditions")}</NavLink>
              </Link>
            </p>
          </CopyRight>
        </>
      )}

      {view === "mobile" && (
        <>
          <Details>
            <Summary>{t("localization:about")}</Summary>
            <Ul>
              <Link to="/terms">
                <Li>
                  <NavLink>{t("localization:terms")}</NavLink>
                </Li>
              </Link>

              <Link to="/contact">
                <Li>
                  <NavLink>{t("localization:contact")}</NavLink>
                </Li>
              </Link>

              <Link to="/about">
                <Li>
                  <NavLink>{t("localization:about")}</NavLink>
                </Li>
              </Link>
            </Ul>
          </Details>
          <Details>
            <Summary>{t("localization:service")}</Summary>
            <Ul>
              <Li>
                <NavLink target="_blank">
                  {t("localization:ourServices")}
                </NavLink>
              </Li>
              <Li>
                <NavLink target="_blank">
                  {t("localization:leadership")}
                </NavLink>
              </Li>
              <Li>
                <NavLink target="_blank">{t("localization:careers")}</NavLink>
              </Li>
            </Ul>
          </Details>
          <Register>
            <H4>{t("localization:getUpdatesWeekly")}</H4>
            <form>
              <label htmlFor="email">{t("localization:email")}:</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="sample@email.com"
                required
              />
              <button type="submit">{t("localization:register")}</button>
            </form>
          </Register>
          <CopyRight>
            <p>
              © {getCurrentYear()} Norwegian Lab Case. All rights reserved.
              <br />
              <Link to="/policy">
                <NavLink> {t("localization:privacyPolicy")}</NavLink> |
              </Link>
              <Link to="/terms">
                <NavLink>{t("localization:termsAndConditions")}</NavLink>
              </Link>
            </p>
          </CopyRight>
        </>
      )}
    </FooterContainer>
  );
};

export default Footer;
