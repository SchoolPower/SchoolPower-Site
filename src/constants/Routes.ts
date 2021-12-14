export interface IRoute {
    to: string,
    nameKey: string,
    external?: boolean,
}

export const navRoutes: IRoute[] = [
    {
        nameKey: "navs.sourceCode",
        to: "https://github.com/SchoolPower",
        external: true,
    },
    {
        nameKey: "navs.web",
        to: "https://web.schoolpower.tech/",
        external: true,
    },
    {
        nameKey: "navs.contactUs",
        to: "",
    },
];

