import { CreditType } from "@schoolpower/constants/credits/sections";
import { avatar } from "@schoolpower/constants/ImageResources";

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
        imageURL: avatar("az.png"),
        types: ["bug", "suggestion", "account"],
    },
    1: {
        name: "陈俊宏",
        imageURL: avatar("cjh.jpg"),
        types: ["suggestion"],
    },
    2: {
        name: "Tinker Ren",
        imageURL: avatar("tr.jpg"),
        types: ["bug", "suggestion", "account"],
    },
};
