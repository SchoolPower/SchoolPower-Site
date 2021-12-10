import { DeviceType, IOS_DEVICE_TYPES, IOSDeviceType } from "@schoolpower/constants/DeviceType";
import rawIOSScreenshotList from "@schoolpower/constants/screenshots/ios/images.json";
import { Language, LANGUAGES } from "@schoolpower/constants/Language";

import a from "/public/a.png";

type IOSScreenshotDeviceName =
    "iPhone 13 Pro Max (15.0)"
    | "iPad Pro (12.9-inch) (5th generation) (15.0)"
    | "MacBook Pro (12.0.1)"

type IOSScreenshotList = {
    [device in IOSScreenshotDeviceName]: {
        [language in Language]: string[]
    };
};

const iOSScreenshotCDN = "https://cdn.jsdelivr.net/gh/SchoolPower/schoolpower-ios-v2@master/screenshots-compressed";

const iOSScreenshotDeviceName = new Map<IOSDeviceType, IOSScreenshotDeviceName>([
    ["iPhone", "iPhone 13 Pro Max (15.0)"],
    ["iPad", "iPad Pro (12.9-inch) (5th generation) (15.0)"],
    ["Mac", "MacBook Pro (12.0.1)"],
]);

const iOSScreenshotsList: IOSScreenshotList = rawIOSScreenshotList as IOSScreenshotList;

const iOSScreenShotsByLanguage = async (
    device: IOSDeviceType,
    language: Language
): Promise<string[]> => {
    const deviceName = iOSScreenshotDeviceName.get(device) ?? "iPhone 13 Pro Max (15.0)";
    const cdnScreenshotsDir = `${iOSScreenshotCDN}/${deviceName}/${language}`;
    return iOSScreenshotsList[deviceName][language].map(filename => `${cdnScreenshotsDir}/${filename}`);
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
