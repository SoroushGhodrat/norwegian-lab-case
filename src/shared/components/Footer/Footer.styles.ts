import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #98B4D4;
  color: #0d1c3b;
  width: 100%;
  padding: 20px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Div = styled.div`
  display: block
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CompanyDetaile = styled.div`
  display: flex;
  flex: 1 100%;
  margin: 0 15%;
  justify-content: space-evenly;
  color: #0d1c3b;
`;
const CopyRight = styled.div`
  display: flex;
  flex: 1 100%;
  margin: 0 15%;
  justify-content: space-evenly;

  p {
    text-align: center;
  }

  @media (max-width: 768px) {
    margin: 0;

    p {
      text-align: center;
    }
  }
`;

const Link = styled.a`
  color: white;
  line-height: 2;
  text-decoration: none;
  color: #0d1c3b;
  &:hover {
    text-decoration: underline;
    font-weight: 600;
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  list-style: none;

  text-decoration: none;
`;

const Li = styled.li`
  margin-bottom: 10px;
  text-decoration: none;
`;

const H4 = styled.h4`
  border-bottom: 1px solid #0d1c3b;
  padding-bottom: 5px;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const Details = styled.details`
  margin: 0.5rem 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.15);
`;
const Summary = styled.summary`
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const Register = styled.div`
  @media (max-width: 768px) {
    padding: 1rem;
    input {
      width: 80%;
    }
    button {
      width: auto;
    }
  }
`;

export {
  FooterContainer,
  CompanyDetaile,
  CopyRight,
  Link,
  Ul,
  Li,
  H4,
  Section,
  Input,
  Button,
  Details,
  Summary,
  Register,
  Div
};
