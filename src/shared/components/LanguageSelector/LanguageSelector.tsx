import React, { useState } from "react";
import {
  LanguageSelectorContainer,
  LanguageFlag,
  LanguageDropdown,
} from "./LanguageSelector.styles";

// Import flag icons for EN and NO languages
import enFlag from "../../../assets/enFlag.svg";
import noFlag from "../../../assets/noFlag.svg";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <LanguageSelectorContainer>
      <LanguageFlag
        src={selectedLanguage === "en" ? enFlag : noFlag}
        alt={selectedLanguage}
      />
      <LanguageDropdown
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="no">Norsk</option>
      </LanguageDropdown>
    </LanguageSelectorContainer>
  );
};

export default LanguageSelector;
