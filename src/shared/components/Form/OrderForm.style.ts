import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 0.5rem;

  &.name {
    flex-direction: row;
  }
  &.email {
    width: 620px;
  }
  &.address {
    flex-direction: row;
  }
  &.form_button {
    min-width: 500px;
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media (max-width: 768px) {
    &.name {
      flex-direction: column;
    }
    &.address {
      flex-direction: column;
    }
    &.email {
      width: auto;
    }
  }
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  text-transform: uppercase;
  width: 10rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #3c639d;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #b4c5e4;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 7rem;
    padding: 0.5rem 1rem;
  }
`;

export { Form, Label, Input, Button, Div };
