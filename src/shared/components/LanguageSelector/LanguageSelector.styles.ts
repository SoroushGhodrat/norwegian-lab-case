import styled from "styled-components";

const LanguageSelectorContainer = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  padding-right: 10px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const LanguageFlag = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

const LanguageDropdown = styled.select`
  background-color: transparent;
  min-width: 85px;
  border: none;
  color: #3c6390;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  cursor: pointer;

  option {
    background-color: #333;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
`;

export { LanguageSelectorContainer, LanguageFlag, LanguageDropdown };
