import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      lng: "en",
      backend: {
        //translation file path
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
      //if any of languages not chosen, english will be chose as default
      fallbackLng: "en",
      //allow to look at all the languages
      debug: true,
      ns: ["localization"],
      defaultNS: "localization",
      interpolation: {
        escapeValue: false,
        formatSeparator: ",",
      },
    },
    (error) => {
      if (error) {
        return console.log("Loading i18n error", error);
      }
    },
  );

export default i18n;
