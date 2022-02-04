export const LANGUAGES = [
    "English",
    "Japanese",
    "Chinese Simplified",
    "Chinese Traditional",
] as const;

export type Language = typeof LANGUAGES[number]
