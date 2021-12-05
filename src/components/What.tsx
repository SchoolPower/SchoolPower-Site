import { Bolt, Brush, Favorite, GppGood, Sync } from "@mui/icons-material";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { SectionHeader } from "@schoolpower/components/SectionHeader";
import React from "react";

import a from "/public/a.png";

interface IWhatItem {
    title: string,
    subtitle: string,
    icon: React.ReactElement,
}

interface IWhatItemProps extends IWhatItem {
    align: "start" | "end",
}

const whatItems: {
    left: IWhatItem[],
    right: IWhatItem[],
} = {
    left: [
        {
            title: "New Look",
            subtitle: "Brand new interface design provides you an enjoyable experience.",
            icon: <Brush color={"secondary"}/>,
        },
        {
            title: "Reliable",
            subtitle: "Dedicated server handling your requests 24/7.",
            icon: <GppGood color={"secondary"}/>,
        },
    ],
    right: [
        {
            title: "Faster",
            subtitle: "70% less time needed to get things updated.",
            icon: <Bolt color={"secondary"}/>,
        },
        {
            title: "Keep in sync",
            subtitle: "Data are always in sync with the PowerSchool® server.",
            icon: <Sync color={"secondary"}/>,
        },
    ],
};

export const What = () => {
    return (
        <Stack sx={{bgcolor: "primary"}} pt={20}>
            <Container>
                <SectionHeader
                    title={"What is this"}
                    subtitle={"SchoolPower is a third-party mobile client for PowerSchool®. We've designed a brand new user interface tailored to the needs of local students."}
                />
                <Stack pt={4} justifyContent={"center"} alignItems={"center"}>
                    <Stack position={"absolute"} zIndex={5}>
                        <img width={332} src={a}/>
                    </Stack>
                    <Grid
                        height={540}
                        mt={18} pt={4} pb={4}
                        container
                        direction={"row"}
                        bgcolor={"primary.main"}
                        sx={{borderRadius: "30px"}}
                    >
                        <Grid height={"100%"} item xs={2.75} lg={3}>
                            <Stack height={"100%"} alignItems={"end"}>
                                {whatItems.left.map((it, index) => (
                                    <WhatItem
                                        key={index}
                                        align={"end"}
                                        title={it.title}
                                        icon={it.icon}
                                        subtitle={it.subtitle}
                                    />
                                ))}
                            </Stack>
                        </Grid>
                        <Grid height={"100%"} item xs={6.5} lg={6} pl={8} pr={8}>
                            <Stack height={"100%"} justifyContent={"center"}>
                                <Box style={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    backgroundColor: "white",
                                    borderRadius: "50%",
                                    opacity: 0.19,
                                }}/>
                            </Stack>
                        </Grid>
                        <Grid height={"100%"} item xs={2.75} lg={3}>
                            <Stack height={"100%"}>
                                {whatItems.right.map((it, index) => (
                                    <WhatItem
                                        key={index}
                                        align={"start"}
                                        title={it.title}
                                        icon={it.icon}
                                        subtitle={it.subtitle}
                                    />
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Stack>
    );
};

const WhatItem = ({align, title, subtitle, icon}: IWhatItemProps) => (
    <Stack maxWidth={"140px"} flex={1} justifyContent={"center"} alignItems={align}>
        <Stack sx={{
            width: 64,
            height: 64,
            backgroundColor: "background.default",
            borderRadius: 32,
            justifyContent: "center",
            alignItems: "center",
        }}>
            {icon}
        </Stack>
        <Typography pt={2} sx={{fontSize: 18, fontWeight: 600, textAlign: align}}>
            {title}
        </Typography>
        <Typography pt={2} sx={{fontSize: 12, textAlign: align}}>
            {subtitle}
        </Typography>
    </Stack>
);