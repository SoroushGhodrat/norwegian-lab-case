import styled from "styled-components";

const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 91vh;
  z-index: -999999;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 30vh;
  text-align: center;
  padding-top: 5vh;
  padding-bottom: 5vh;

  p {
    line-height: 1.75;
  }

  h2 {
    color: #3c6390;
  }

  @media (max-width: 768px) {
    padding: 0 5vh;
    padding-top: 10px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const HeroText = styled.h3`
  color: orange;
  font-size: 40px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    top: 40%;
    padding: auto 1px;
  }
`;

const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    color: #3c6390;
  }
  img {
    width: 400px;
  }

  button {
    width: 10rem;
    padding: 0.5rem 1rem;
    margin-top: 3rem;
    border-radius: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
    background-color: #3c6390;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #3c63ab;
    }
  }
  @media (max-width: 768px) {
    img {
      width: 250px;
    }
  }
`;

export { HeroContainer, HeroImage, HeroText, Div, Product };
