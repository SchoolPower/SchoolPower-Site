import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const Thanks = () => {
    const {t} = useTranslation();
    return (
        <Typography pt={4} pb={4} variant={"subtitle1"}>
            {t("support.thanks")}
        </Typography>
    );
};