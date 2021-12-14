import { AccountCircle, BugReport, Message } from "@mui/icons-material";
import { Credits, credits } from "@schoolpower/constants/credits/credits";
import React from "react";

export type CreditType = "bug" | "account" | "suggestion";

export interface ICreditSection {
    type: CreditType,
    titleKey: string,
    icon: React.ReactElement,
}

export const creditSections: ICreditSection[] = [
    {
        type: "bug",
        titleKey: "home.credits.sections.bugReports",
        icon: <BugReport color={"info"}/>,
    },
    {
        type: "account",
        titleKey: "home.credits.sections.testAccounts",
        icon: <AccountCircle color={"info"}/>,
    },
    {
        type: "suggestion",
        titleKey: "home.credits.sections.suggestions",
        icon: <Message color={"info"}/>,
    },
];

export const creditIdsByType: Map<CreditType, (keyof Credits)[]> = (() => {
    const raw = new Map<CreditType, Set<keyof Credits>>();
    for (const [idString, credit] of Object.entries(credits)) {
        const id = Number(idString);
        for (const type of credit.types) {
            const ids = raw.get(type) ?? new Set();
            if (!ids.has(id)) {
                ids.add(id);
                raw.set(type, ids);
            }
        }
    }
    const ret = new Map<CreditType, (keyof Credits)[]>();
    for (const [type, ids] of raw) {
        ret.set(type, Array.from(ids));
    }
    return ret;
})();
