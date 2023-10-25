import React, { useEffect, useState } from "react";
import {
  LanguageSelectorContainer,
  LanguageFlag,
  LanguageDropdown,
} from "./LanguageSelector.styles";

// Import flag icons for EN and NO languages
import enFlag from "../../../assets/enFlag.svg";
import noFlag from "../../../assets/noFlag.svg";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    const lng = localStorage.getItem("i18nextLng");

    if (!!lng) {
      i18next.changeLanguage(lng);
      setLang(lng);
    }
  }, []);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLanguage(event.target.value);
    localStorage.setItem("i18nextLng", event.target.value);
    i18n.changeLanguage(event.target.value);
    setLang(event.target.value);
  };

  return (
    <LanguageSelectorContainer>
      <LanguageFlag
        src={selectedLanguage === "en" ? enFlag : noFlag}
        alt={selectedLanguage}
      />
      <LanguageDropdown
        aria-label="language selector"
        value={lang}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="no">Norsk</option>
      </LanguageDropdown>
    </LanguageSelectorContainer>
  );
};

export default LanguageSelector;
