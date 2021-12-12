import { Language } from "@schoolpower/constants/Language";

const cdn = "https://cdn.jsdelivr.net/gh/SchoolPower/schoolpower-resources@main/web-images";

type HeroImageDeviceType = "laptop" | "tablet" | "phone";

const heroImageDeviceName = new Map<HeroImageDeviceType, string>([
    ["phone", "iPhone 13 Pro Max - Graphite"],
    ["tablet", "iPad Pro 12.9 - Space Gray - Vertical"],
    ["laptop", "MacBook Pro 16-inch"],
]);

export const heroImage = (
    device: HeroImageDeviceType,
    language: Language,
) => `${cdn}/hero/${language}/${heroImageDeviceName.get(device)}-min.png`;

export const donationIcon = (
    method: string
) => `${cdn}/donation/icon_${method}.png`;

export const headerLogo = (
    withText?: boolean
) => `${cdn}/header/header_logo${withText ? "_text" : ""}.png`;

export const miscImage = (
    name: string
) => `${cdn}/misc/${name}.png`;
