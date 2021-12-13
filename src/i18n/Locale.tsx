import { AppStoreRegion } from "@schoolpower/constants/AppDownloads";
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
    region: AppStoreRegion,
}

export const locales: Locale[] = [
    {
        identifier: "en",
        language: "English",
        name: "English",
        icon: <span className="flag-icon flag-icon-ca"/>,
        region: "ca",
    },
    {
        identifier: "zh-Hans",
        language: "Chinese Simplified",
        name: "简体中文",
        icon: <span className="flag-icon flag-icon-cn"/>,
        region: "cn",
    },
    {
        identifier: "zh-Hant",
        language: "Chinese Traditional",
        name: "繁體中文",
        icon: <span className="flag-icon flag-icon-tw"/>,
        region: "tw",
    },
    {
        identifier: "ja",
        language: "Japanese",
        name: "日本語",
        icon: <span className="flag-icon flag-icon-jp"/>,
        region: "jp",
    },
];

export const localeByIdentifier: Record<LocaleIdentifier, Locale> = locales
    .reduce<Record<LocaleIdentifier, Locale>>((acc, cur) => {
        acc[cur.identifier] = cur;
        return acc;
    }, {} as Record<LocaleIdentifier, Locale>);
