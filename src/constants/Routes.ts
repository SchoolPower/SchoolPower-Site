export interface IRoute {
    to: string,
    nameKey: string,
    external?: boolean,
}

export const navRoutes: IRoute[] = [
    {
        nameKey: "navs.sourceCode",
        to: "",
        external: true,
    },
    {
        nameKey: "navs.web",
        to: "",
        external: true,
    },
    {
        nameKey: "navs.contactUs",
        to: "",
    },
];

