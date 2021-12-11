import { Class } from "@mui/icons-material";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { LinkWrapper } from "@schoolpower/components/ButtonLink";
import { SectionHeader } from "@schoolpower/components/SectionHeader";
import React from "react";

import ps_sp from "/public/ps_sp.png";

const howItems: IHowItem[] = [
    {text: "Use the username and password you provided to login PowerSchool®."},
    {text: "Fetch the information using their API and send it to your client."},
    {text: "Display the data on your devices with easy-to-use interfaces."},
];

interface IHowItem {
    text: string;
}

interface IHowItemProps {
    item: IHowItem;
    index: number;
}

export const How = () => {
    return (
        <Stack sx={{bgcolor: "primary"}} pt={28}>
            <Container>
                <SectionHeader
                    title={"How does it work"}
                    subtitle={"SchoolPower displays what's originally on the PowerSchool® website."}
                />
                <Grid container pt={7} alignItems={"center"} justifyContent={"center"}>
                    <Grid item xs={12} sm={8} md={6}>
                        <Stack alignItems={"center"} justifyContent={"center"}>
                            <img style={{maxWidth: "100%"}}
                                 src={ps_sp}/>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack
                            pl={{
                                xs: 2,
                                md: 8,
                            }}
                            pr={2}
                            height={"100%"}
                            justifyContent={"center"}
                            alignItems={{
                                xs: "center",
                                md: "flex-start",
                            }}
                            pt={{
                                xs: 7,
                                md: 0,
                            }}
                            spacing={7}
                        >
                            <Stack maxWidth={"380px"} spacing={3}>
                                {howItems.map((it, index) => (
                                    <HowItem key={index} index={index + 1} item={it}/>
                                ))}
                            </Stack>
                            <LinkWrapper to={"/eula"}>
                                <Button
                                    sx={{
                                        height: 56,
                                        width: "fit-content",
                                        borderRadius: "16px",
                                        paddingLeft: 3,
                                        paddingRight: 3,
                                    }}
                                    variant={"contained"}
                                    startIcon={<Class/>}
                                >
                                    User Agreement
                                </Button>
                            </LinkWrapper>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    );
};

const HowItem = ({item, index}: IHowItemProps) => (
    <Stack direction={"row"} spacing={3} alignItems={"center"}>
        <Stack sx={{
            minWidth: 40,
            width: 40,
            height: 40,
            borderRadius: 20,
            bgcolor: "primary.main",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Typography color={"background.default"}>
                {index}
            </Typography>
        </Stack>
        <Typography color={"primary.contrastText"} fontWeight={500}>
            {item.text}
        </Typography>
    </Stack>
);
