import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

export interface ISectionHeaderProps {
    title: string,
    subtitle: string | React.ReactNode,
}

export const SectionHeader = ({title, subtitle}: ISectionHeaderProps) => (
    <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={8}>
            <Stack>
                <Typography variant={"h4"} textAlign={"center"} fontWeight={600}>
                    {title}
                </Typography>
                <Typography variant={"subtitle1"} textAlign={"center"} pt={1.5} fontWeight={500}>
                    {subtitle}
                </Typography>
            </Stack>
        </Grid>
    </Grid>
);