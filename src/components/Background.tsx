import { Stack } from "@mui/material";
import { ToolBarHeight } from "@schoolpower/constants/styles";
import React, { FC } from "react";

export const Background: FC<{ color?: string }> = ({
    children,
    color,
}) => {
    return (
        <Stack sx={{
            bgcolor: `${color ?? "primary.main"}`,
            width: "100%",
            minHeight: `calc(100vh - ${ToolBarHeight})`,
        }}>{children}</Stack>
    );
};
