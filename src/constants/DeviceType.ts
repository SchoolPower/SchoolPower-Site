export const DEVICE_TYPES = [
    "iPad",
    "iPhone",
    "Android"
] as const;

export type DeviceType = typeof DEVICE_TYPES[number];
