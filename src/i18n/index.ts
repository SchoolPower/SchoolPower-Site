import { Language } from "@schoolpower/i18n/Language";
import { Locale, LOCALE_IDENTIFIERS, localeByIdentifier } from "@schoolpower/i18n/Locale";
import en from "@schoolpower/i18n/resources/en";
import ja from "@schoolpower/i18n/resources/ja";
import zhHans from "@schoolpower/i18n/resources/zh-Hans";
import zhHant from "@schoolpower/i18n/resources/zh-Hant";
import i18next, { changeLanguage, use, i18n } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            "en": en,
            "ja": ja,
            "zh-Hans": zhHans,
            "zh-Hant": zhHant,
        },
        supportedLngs: ["en", "ja", "zh-Hans", "zh-Hant"],
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        }
    });

export const setLocale = (locale: Locale) => {
    changeLanguage(locale.identifier);
};

export const getLocale = (i18n?: i18n): Locale => {
    const lang = (i18n ?? i18next).languages[0] ?? "en";
    if (LOCALE_IDENTIFIERS.includes(lang)) {
        return localeByIdentifier[lang];
    }
    return localeByIdentifier["en"];
};
