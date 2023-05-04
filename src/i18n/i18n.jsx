import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import global_es from '../translation/es/global.json'
import global_en from '../translation/en/global.json'
import global_it from '../translation/it/global.json'

const resources = {
  es: {
    global: global_es
  },
  en: {
    global: global_en
  },
  it: {
    global: global_it
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    interpolation: { escapeValue: false }
  });

  export default i18n;