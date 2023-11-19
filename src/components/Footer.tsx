import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const icpUrl = "https://beian.miit.gov.cn/";

export const Footer = () => {
    const {t} = useTranslation();
    return (
        <Stack alignItems={"center"} spacing={2} p={6} sx={{bgcolor: "primary.contrastText"}}>
            <Typography variant={"caption"} color={"white"}>
                {t("copyright")}
            </Typography>
            <Link href={icpUrl} color={"white"} underline={"hover"} variant={"caption"}>
                浙ICP备18004218号
            </Link>
        </Stack>
    );
};
