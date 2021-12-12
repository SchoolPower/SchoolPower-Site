import { Android, Apple } from "@mui/icons-material";
import { Box, Button, Container, Grid, Link, Stack } from "@mui/material";
import { Title } from "@schoolpower/components/PageTitle";
import { androidAPKURL, appStoreURL } from "@schoolpower/constants/AppDownloads";
import { PowerSchool } from "@schoolpower/constants/PowerSchool";
import { ToolBarHeight } from "@schoolpower/constants/styles";
import React from "react";

import iphone from "/public/iPhone 13 Pro Max - Graphite.png";
import ipad from "/public/iPad Pro 12.9 - Space Gray - Vertical.png";
import mac from "/public/MacBook Pro 16-inch.png";

export const Landing = () => {
    return (
        <Grid container sx={{bgcolor: "background.default", width: "100%", minHeight: "100vh"}}>
            <Background/>
            <Stack sx={{minHeight: "40vh", width: "100%", zIndex: 1}} justifyContent="center">
                <Container>
                    <Grid pt={6} container justifyContent={"center"} alignItems={"center"}>
                        <Title
                            title={<>May SchoolPower<sup>2.0</sup><br/>Be With You</>}
                            subtitle={<>An alternative client for <PowerSchool/></>}
                        />
                    </Grid>
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

const Downloads = () => {
    const IOSDownload = () => {
        return (
            <DownloadButton
                href={appStoreURL("jp")}
                icon={<Apple/>}
                text={"App Store"}
            />
        );
    };

    const AndroidDownload = () => {
        return (
            <Stack alignItems={"center"}>
                <DownloadButton
                    disabled
                    icon={<Android/>}
                    text={"Android (Soon)"}
                />
                <Link href={androidAPKURL} underline={"hover"} color={"info.main"} variant={"caption"}>
                    Download v1.5
                </Link>
            </Stack>
        );
    };

    return (
        <Stack
            direction={{xs: "column", sm: "row"}}
            spacing={{xs: 2, sm: 4}}
            justifyContent={"center"}
            alignItems={{
                xs: "center",
                sm: "flex-start",
            }}
            pt={6}
            pb={6}
        >
            <IOSDownload/>
            <AndroidDownload/>
        </Stack>
    );
};

const DownloadButton = ({disabled, icon, text, href}: {
    disabled?: boolean,
    icon: React.ReactNode,
    text: string,
    href?: string,
}) => (
    <Button
        href={href ?? ""}
        target={"_blank"}
        disabled={disabled}
        variant={"contained"}
        color={"info"}
        startIcon={icon}
        sx={{
            minWidth: "160px",
            height: "fit-content",
            pt: 1,
            pb: 1,
        }}>
        {text}
    </Button>
);

const Images = () => {
    return (
        <Grid container justifyContent={"center"}>
            <Grid
                container item xs={12}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{display: {xs: "block", sm: "none"}}}
            >
                <Stack alignItems={"center"}>
                    <img style={{maxWidth: "min(400px, 100%)"}} src={iphone}/>
                </Stack>
            </Grid>
            <Grid item xs={10} md={8} sx={{display: {xs: "none", sm: "block", lg: "none"}}}>
                <img style={{maxWidth: "100%"}} src={ipad}/>
            </Grid>
            <Grid item xs={12} sx={{display: {xs: "none", lg: "block"}}}>
                <img style={{maxWidth: "100%"}} src={mac}/>
            </Grid>
        </Grid>
    );
};
