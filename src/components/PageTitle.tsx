import { Grid, Typography } from "@mui/material";
import React from "react";

export interface ITitleProps {
    title: string,
    subtitle: string,
}

export const Title = ({title, subtitle}: ITitleProps) => {
    return (
        <Grid item md={8} xl={6}>
            <Typography
                sx={{
                    fontSize: {xs: 32, sm: 48, md: 56},
                    lineHeight: {xs: "44px", sm: "60px", md: "68px"},
                }}
                fontWeight={800}
                textAlign={"center"}
                pt={4}
            >
                {title}
            </Typography>
            <Typography variant={"subtitle1"} textAlign={"center"} pt={2}>
                {subtitle}
            </Typography>
        </Grid>
    );
};
