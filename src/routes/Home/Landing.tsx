import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { ToolBarHeight } from "@schoolpower/constants/styles";
import React from "react";

import a from "/public/a.png";

export const Landing = () => {
    return (
        <Grid container sx={{bgcolor: "background.default", width: "100%", minHeight: "100vh"}}>
            <Background/>
            <Stack sx={{minHeight: "40vh", width: "100%", zIndex: 1}} justifyContent="center">
                <Container>
                    <Title/>
                    <Downloads/>
                </Container>
            </Stack>
            <Stack width={"100%"} alignItems={"center"} mt={"auto"} zIndex={1}>
                <Container>
                    <Images/>
                </Container>
            </Stack>
        </Grid>
    );
};

const Background = () => {
    return (
        <Box sx={{
            bgcolor: "primary.main",
            width: "100%",
            height: {xs: "100%", md: `calc(100vh - ${ToolBarHeight})`},
            position: "absolute",
        }}/>
    );
};

const Title = () => {
    return (
        <Grid pt={5} container justifyContent={"center"} alignItems={"center"}>
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
                    May SchoolPower<br/>Be With You
                </Typography>
                <Typography variant={"subtitle1"} textAlign={"center"} pt={2}>
                    An alternative mobile client for PowerSchool®
                </Typography>
            </Grid>
        </Grid>
    );
};

const Downloads = () => {
    const IOSDownload = () => {
        return (
            <img width={128}
                src="https://img.favpng.com/11/5/0/app-store-ios-download-apple-png-favpng-RAZKpacGpHZHnM3W2cQW0yS1e.jpg"
                alt={"ios-download"}/>
        );
    };

    const AndroidDownload = () => {
        return (
            <img width={128} src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Google_Play_Store_badge_FR.svg"/>
        );
    };

    return (
        <Stack
            direction={{xs: "column", sm: "row"}}
            spacing={{xs: 2, sm: 4}}
            justifyContent={"center"}
            alignItems={"center"}
            pt={6}
            pb={6}
        >
            <IOSDownload/>
            <AndroidDownload/>
        </Stack>
    );
};

const Images = () => {
    return (
        <Grid container justifyContent={"center"} alignItems={"end"} columnSpacing={7}>
            <Grid item md={3.75} pb={2} sx={{display: {xs: "none", md: "block"}}}>
                <img style={{maxWidth: "100%"}} src={a}/>
            </Grid>
            <Grid item xs={12} sm={8} md={4.5}>
                <img style={{maxWidth: "100%"}} src={a}/>
            </Grid>
            <Grid item md={3.75} pb={2} sx={{display: {xs: "none", md: "block"}}}>
                <img style={{maxWidth: "100%"}} src={a}/>
            </Grid>
        </Grid>
    );
};
