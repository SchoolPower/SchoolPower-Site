import { Stack, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
    return (
        <Stack alignItems={"center"} spacing={2} p={6} sx={{bgcolor: "primary.contrastText"}}>
            <Typography variant={"caption"} color={"white"}>
                Build with ❤️ by SchoolPower Studio
            </Typography>
            <Typography variant={"caption"} color={"white"}>
                浙ICP备18004218号
            </Typography>
        </Stack>
    );
};
