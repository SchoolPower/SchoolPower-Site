import { Grid } from "@mui/material";
import { ToolBarHeight } from "@schoolpower/constants/styles";
import React, { FC } from "react";

export const Background: FC = ({children}) => {
    return (
        <Grid container sx={{
            bgcolor: "primary.main",
            width: "100%",
            minHeight: `calc(100vh - ${ToolBarHeight})`,
        }}>{children}</Grid>
    );
};
