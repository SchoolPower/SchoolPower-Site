import { useLocale } from "@schoolpower/hooks/useLocale";

export function useLanguage() {
    return useLocale().language;
}
