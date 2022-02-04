import { Stack } from "@mui/material";
import { SxProps } from "@mui/system";
import { ToolBarHeight } from "@schoolpower/constants/styles";
import React, { FC } from "react";

export const Background: FC<{ color?: string, sx?: SxProps }> = ({
    children,
    color,
    sx,
}) => {
    return (
        <Stack sx={{
            bgcolor: `${color ?? "primary.main"}`,
            width: "100%",
            minHeight: `calc(100vh - ${ToolBarHeight})`,
            ...sx,
        }}>{children}</Stack>
    );
};
