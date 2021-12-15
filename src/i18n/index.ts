import { Locale, LOCALE_IDENTIFIERS, localeByIdentifier } from "@schoolpower/i18n/Locale";
import en from "@schoolpower/i18n/resources/en";
import ja from "@schoolpower/i18n/resources/ja";
import zhCN from "@schoolpower/i18n/resources/zh-CN";
import zhTW from "@schoolpower/i18n/resources/zh-TW";
import i18next, { changeLanguage, i18n, use } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            "en": en,
            "ja": ja,
            "zh-CN": zhCN,
            "zh-TW": zhTW,
        },
        supportedLngs: ["en", "ja", "zh-CN", "zh-TW"],
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        react: {
            transSupportBasicHtmlNodes: true,
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
