import { DeviceType, IOS_DEVICE_TYPES, IOSDeviceType } from "@schoolpower/constants/DeviceType";
import { Language, LANGUAGES } from "@schoolpower/constants/Language";

import a from "/public/a.png";

const iOSScreenshotList = "https://raw.githubusercontent.com/SchoolPower/schoolpower-ios-v2/master/screenshots-compressed";
const iOSScreenshotCDN = "https://cdn.jsdelivr.net/gh/SchoolPower/schoolpower-ios-v2@master/screenshots-compressed";

const iOSScreenshotDeviceName = new Map<IOSDeviceType, string>([
    ["iPhone", "iPhone 13 Pro Max (15.0)"],
    ["iPad", "iPad Pro (12.9-inch) (5th generation) (15.0)"],
    ["Mac", "MacBook Pro (12.0.1)"],
]);

const iOSScreenShotsByLanguage = async (
    device: IOSDeviceType,
    language: Language
): Promise<string[]> => {
    const ghScreenshotsDir = `${iOSScreenshotList}/${iOSScreenshotDeviceName.get(device)}/${language}`;
    const cdnScreenshotsDir = `${iOSScreenshotCDN}/${iOSScreenshotDeviceName.get(device)}/${language}`;
    const screenshotsList: string[] = await fetch(`${ghScreenshotsDir}/images.json`)
        .then(response => response.json());
    return screenshotsList.map(filename => `${cdnScreenshotsDir}/${filename}`);
};

const iOSScreenshotsByDevice = async (
    device: IOSDeviceType,
) => {
    const ret = new Map<Language, string[]>();
    for (const language of LANGUAGES) {
        ret.set(
            language,
            await iOSScreenShotsByLanguage(device, language)
        );
    }
    return ret;
};

const iOSScreenshots = async () => {
    const ret: [IOSDeviceType, Map<Language, string[]>][] = [];
    for (const device of IOS_DEVICE_TYPES) {
        ret.push(
            [device, await iOSScreenshotsByDevice(device)]
        );
    }
    return ret;
};

const androidScreenShots = async () => {
    const ret = new Map<Language, string[]>();
    for (const language of LANGUAGES) {
        ret.set(
            language,
            Array(5).fill(0).map(() => a) // TODO
        );
    }
    return ret;
};

export const screenshotsByDeviceLanguage = new Map<DeviceType, Map<Language, string[]>>(
    [
        ...await iOSScreenshots().catch(() => []),
        ["Android", await androidScreenShots().catch(() => new Map())]
    ]
);
