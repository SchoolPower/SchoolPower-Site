import { Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const {t} = useTranslation();
    return (
        <Stack alignItems={"center"} spacing={2} p={6} sx={{bgcolor: "primary.contrastText"}}>
            <Typography variant={"caption"} color={"white"}>
                {t("copyright")}
            </Typography>
            <Typography variant={"caption"} color={"white"}>
                浙ICP备18004218号
            </Typography>
        </Stack>
    );
};
