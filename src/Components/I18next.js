// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationRU from '../I18n/ru/translation.json';
import translationUZ from '../I18n/uz/translation.json';

const resources = {
    uz: {
        translation: translationUZ
    },
    ru: {
        translation: translationRU
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('lang') ? localStorage.getItem('lang') : "uz", // default language
    });

export default i18n;
