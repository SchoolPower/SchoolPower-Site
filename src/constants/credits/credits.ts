import { deepPurple } from "@mui/material/colors";
import { CreditType } from "@schoolpower/constants/credits/sections";

export interface ICredit {
    name: string,
    imageURL?: string,
    color?: string,
    types: CreditType[],
}

export type ICredits = { [id: number]: ICredit }

export const credits: ICredits = {
    0: {
        name: "さかまたクロヱ",
        imageURL: "https://i1.sndcdn.com/artworks-M3MiBvSdqvqjAyVj-movmDw-t500x500.jpg",
        types: ["bug", "suggestion", "account"],
    },
    1: {
        name: "ほしまちすいせい",
        color: deepPurple[600],
        types: ["bug"],
    },
    2: {
        name: "ほしまちすいせい",
        types: ["bug"],
    },
    3: {
        name: "ほしまちすいせい",
        imageURL: "https://i1.sndcdn.com/artworks-M3MiBvSdqvqjAyVj-movmDw-t500x500.jpg",
        color: deepPurple[600],
        types: ["bug"],
    },
};
