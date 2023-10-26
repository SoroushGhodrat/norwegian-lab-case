import heroImage from "../../assets/Hero_2.jpg";
import {
  HeroContainer,
  HeroImage,
  HeroText,
  Div,
  Product,
} from "./Landing.styles";
import ProductImg from "../../assets/cl-box-product.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroContainer>
        <HeroImage src={heroImage} alt="Hero" />
        <HeroText>{t("localization:hereText")}</HeroText>
      </HeroContainer>
      <Div>
        <h2>{t("localization:landingHeader")}</h2>
        <p>{t("localization:mission")}</p>
      </Div>
      <Product>
        <h2>{t("localization:product")}</h2>
        <img src={ProductImg} alt="Product" />
        <Link to="/order#best-seller">
          {" "}
          <button type="submit">{t("localization:order")}</button>
        </Link>
      </Product>
    </>
  );
};

export default LandingPage;
