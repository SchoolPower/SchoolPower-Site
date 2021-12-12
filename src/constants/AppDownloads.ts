type AppStoreRegion = "ca" | "cn" | "tw" | "jp";

export const appStoreURL = (region?: AppStoreRegion) => `https://apps.apple.com/${
    region ? `${region}/` : ""
}app/schoolpower/id1255370309`;

export const androidAPKURL = "https://api.schoolpower.tech/dist/latest.php";
