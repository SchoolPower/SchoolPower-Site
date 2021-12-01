import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

import a from "/public/a.png";

export const Home = () => {

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

    const LandingImages = () => {
        return (
            <Stack direction={"row"} spacing={7}>
                <Stack justifyContent={"end"} pb={2}><img width={241} src={a}/></Stack>
                <img width={312} src={a}/>
                <Stack justifyContent={"end"} pb={2}><img width={241} src={a}/></Stack>
            </Stack>
        );
    };

    const Header = () => {
        return (
            <Stack direction={"row"} height={"56px"} position={"sticky"}>
                <Stack>

                </Stack>
                <Stack direction={"row"} ml={"auto"}>
                    <Button title={"aa"}/>
                </Stack>
            </Stack>
        );
    };

    const Landing = () => {
        return (
            <Grid container sx={{bgcolor: "primary.main", width: "100%", height: "calc(100vh - 100px)"}}>
                <Stack sx={{height: "calc(100vh - 100px - 374px)", width: "100%"}} justifyContent="center">
                    <Container>
                        <Grid container justifyContent={"center"} alignItems={"center"}>
                            <Grid item md={8} xl={6}>
                                <Typography variant={"h3"} fontWeight={800} textAlign={"center"}>
                                    May SchoolPower<br/>Be With You
                                </Typography>
                                <Typography variant={"subtitle1"} textAlign={"center"}>
                                    An alternative mobile client for PowerSchool®
                                </Typography>
                            </Grid>
                        </Grid>
                        <Stack direction={"row"} spacing={2} justifyContent={"center"}>
                            <IOSDownload/>
                            <AndroidDownload/>
                        </Stack>
                    </Container>
                </Stack>
                <Stack width={"100%"} alignItems={"center"} mt={"auto"} mb={"-250px"} zIndex={1}>
                    <LandingImages/>
                </Stack>
            </Grid>
        );
    };

    const LandingBleed = () => {
        return (
            <Grid container height={"250px"} sx={{bgcolor: "background.default"}}/>
        );
    };

    const Footer = () => {
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

    return (
        <Stack>
            <Landing/>
            <LandingBleed/>
            <Footer/>
        </Stack>
    );
};
