import heroImage from "../../assets/Hero_2.jpg";
import {
  HeroContainer,
  HeroImage,
  HeroText,
  Div,
  Product,
} from "./Landing.styles";
import ProductImg from "../../assets/cl-box-product.png";
import Footer from "../../shared/components/Footer/Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <HeroContainer>
        <HeroImage src={heroImage} alt="Hero" />
        <HeroText>
          Elevate Your Well-Being <br /> Discover Premium Healthcare Products
          for a Healthier Life!
        </HeroText>
      </HeroContainer>
      <Div>
        <h2>
          Enhancing well-being by embracing innovation and striving for
          excellence.
        </h2>
        <p>
          Our mission is to enhance the quality of life for individuals
          worldwide through groundbreaking innovations and unwavering commitment
          to excellence. Specializing in the creation of cutting-edge health
          medicines, we relentlessly pursue advancements in the field of
          healthcare. Through rigorous research, development, and a passion for
          improving lives, we craft medicines that not only treat ailments but
          also promote overall well-being. Our mission is to introduce
          groundbreaking solutions that empower individuals to lead healthier,
          more fulfilling lives. With a focus on innovation and a drive for
          excellence, we continuously strive to make a meaningful impact on the
          world's health landscape, one breakthrough at a time.
        </p>
      </Div>
      <Product>
        <h2>Our best seller</h2>
        <img src={ProductImg} alt="Product" />
        <Link to="/order#best-seller"> <button type="submit">order</button></Link>
       
      </Product>


    </>
  );
};

export default LandingPage;
