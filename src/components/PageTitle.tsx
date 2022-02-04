import { Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

export interface ITitleProps {
    title: string | React.ReactNode,
    subtitle: string | React.ReactNode,
}

export const Title = ({title, subtitle}: ITitleProps) => {
    return (
        <Grid item md={8} xl={6}>
            <StyledTitle
                sx={{
                    fontSize: {xs: 38, sm: 48, md: 56},
                    lineHeight: {xs: "44px", sm: "60px", md: "68px"},
                    whiteSpace: "pre-line",
                }}
                fontWeight={800}
                textAlign={"center"}
                pt={4}
            >
                {title}
            </StyledTitle>
            <Typography variant={"subtitle1"} textAlign={"center"} pt={2}>
                {subtitle}
            </Typography>
        </Grid>
    );
};

const StyledTitle = styled(Typography)`
  sup {
    font-size: 60%;
  }  
`;
