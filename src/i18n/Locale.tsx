import { Language } from "@schoolpower/i18n/Language";
import React from "react";

export const LOCALE_IDENTIFIERS = [
    "en", "ja", "zh-Hans", "zh-Hant"
];

export type LocaleIdentifier = typeof LOCALE_IDENTIFIERS[number];

export interface Locale {
    identifier: LocaleIdentifier,
    language: Language,
    name: string,
    icon: string | React.ReactNode,
}

export const locales: Locale[] = [
    {
        identifier: "en",
        language: "English",
        name: "English",
        icon: <span className="flag-icon flag-icon-us"/>,
    },
    {
        identifier: "zh-Hans",
        language: "Chinese Simplified",
        name: "简体中文",
        icon: <span className="flag-icon flag-icon-cn"/>,
    },
    {
        identifier: "zh-Hant",
        language: "Chinese Traditional",
        name: "繁體中文",
        icon: <span className="flag-icon flag-icon-tw"/>,
    },
    {
        identifier: "ja",
        language: "Japanese",
        name: "日本語",
        icon: <span className="flag-icon flag-icon-jp"/>,
    },
];

export const localeByIdentifier: Record<LocaleIdentifier, Locale> = locales
    .reduce<Record<LocaleIdentifier, Locale>>((acc, cur) => {
        acc[cur.identifier] = cur;
        return acc;
    }, {} as Record<LocaleIdentifier, Locale>);
