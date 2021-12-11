export interface IRoute {
    to: string,
    name: string,
    external?: boolean,
}

export const navRoutes: IRoute[] = [
    {
        name: "Source Code",
        to: "",
        external: true,
    },
    {
        name: "Web (Beta)",
        to: "",
        external: true,
    },
    {
        name: "Contact Us",
        to: "",
    },
];

