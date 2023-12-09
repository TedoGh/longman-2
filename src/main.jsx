import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n";
// import i18n from 'i18next';
// import HttpApi from 'i18next-http-backend';
// import { initReactI18next } from 'react-i18next';
// import { default as LanguageDetector } from 'i18next-browser-languagedetector';

// import translationEN from "./locales/en/translation.json";
// import translationKA from "./locales/ka/translation.json";

// const resources = {
//   en: { translation: translationEN, },
//   ka: { translation: translationKA, }
// };

// i18n
//   .use(initReactI18next)
//   .use(LanguageDetector)
//   .use(HttpApi)
//   .init({
//     supportedLngs: ['en', 'ka'],
//     fallbackLng: 'en',
//     resources,
//     detection: {
//       order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
//       caches: ['cookie'],
//     },
//     backend: {
//       loadPath: '/locales/{{lng}}/translation.json',
//     }
//   });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
