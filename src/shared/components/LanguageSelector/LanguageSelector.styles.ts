import styled from "styled-components";

const LanguageSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const LanguageFlag = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const LanguageDropdown = styled.select`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  option {
    background-color: #333;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
  
`;

export { LanguageSelectorContainer, LanguageFlag, LanguageDropdown };
