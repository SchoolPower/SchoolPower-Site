import { deepPurple } from "@mui/material/colors";
import { CreditType } from "@schoolpower/constants/credits/sections";

export interface ICredit {
    name: string,
    imageURL?: string,
    color?: string,
    types: CreditType[],
}

export type Credits = { [id: number]: ICredit }

export const credits: Credits = {
    0: {
        name: "Andrew Zhang",
        imageURL: "https://i.loli.net/2018/09/18/5ba0ecc0f01c1.jpg",
        types: ["bug", "suggestion", "account"],
    },
    1: {
        name: "陈俊宏",
        imageURL: "https://i.loli.net/2017/08/11/598d22aca5cfe.jpg",
        types: ["suggestion"],
    },
    2: { // Demo
        name: "さかまたクロヱ",
        color: deepPurple[600],
        types: ["bug"],
    },
};
