import styled from "styled-components";

const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 95vh;
  `;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 55vh;
  text-align: center;
  padding-top: 5vh;
  padding-bottom: 5vh;
  

  p {
    line-height: 1.75;
  }
  `;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

const HeroText = styled.h3`
  color: red;
  font-size: 3rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  text-align: center;
`;

export { HeroContainer, HeroImage, HeroText, Div };
