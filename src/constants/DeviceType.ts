export const IOS_DEVICE_TYPES = [
    "iPad",
    "iPhone",
    "Mac"
] as const;

export const DEVICE_TYPES = [
    ...IOS_DEVICE_TYPES,
    "Android"
] as const;

export type IOSDeviceType = typeof IOS_DEVICE_TYPES[number];
export type DeviceType = typeof DEVICE_TYPES[number];
