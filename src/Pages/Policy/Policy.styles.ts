import styled from "styled-components";

const Container = styled.div`
  padding: 0 30vh;
  h2 {
    color: black;
  }
  @media (max-width: 768px) {
    padding: 0 5vh;
    padding-top: 10px;
    img {
      width: 300px;
    }
  }
`;

export { Container };
