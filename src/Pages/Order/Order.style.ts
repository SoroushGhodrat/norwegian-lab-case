import styled from "styled-components";

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
    padding: 0 0vh;
    h2 {
      color: #3c6390;
    }
  }
`;

const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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

export { Div, Product };
