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
    region: AppStoreRegion,
}

export const locales: Locale[] = [
    {
        identifier: "en",
        language: "English",
        name: "English",
        region: "ca",
    },
    {
        identifier: "zh-Hans",
        language: "Chinese Simplified",
        name: "简体中文",
        region: "cn",
    },
    {
        identifier: "zh-Hant",
        language: "Chinese Traditional",
        name: "繁體中文",
        region: "tw",
    },
    {
        identifier: "ja",
        language: "Japanese",
        name: "日本語",
        region: "jp",
    },
];

export const localeByIdentifier: Record<LocaleIdentifier, Locale> = locales
    .reduce<Record<LocaleIdentifier, Locale>>((acc, cur) => {
        acc[cur.identifier] = cur;
        return acc;
    }, {} as Record<LocaleIdentifier, Locale>);
