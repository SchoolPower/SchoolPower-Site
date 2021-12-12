import { getLocale } from "@schoolpower/i18n";
import { useTranslation } from "react-i18next";

export function useLanguage() {
    return getLocale(useTranslation().i18n).language;
}
