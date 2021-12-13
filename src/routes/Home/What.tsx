import { Bolt, Brush, GppGood, Sync } from "@mui/icons-material";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { SectionHeader } from "@schoolpower/components/SectionHeader";
import { PowerSchool } from "@schoolpower/constants/PowerSchool";
import { Translate } from "@schoolpower/hooks/useTranslate";
import React from "react";

import a from "/public/a.png";

import { useTranslation } from "react-i18next";

interface IWhatItem {
    title: string,
    subtitle: string | React.ReactNode,
    icon: React.ReactElement,
}

interface IWhatItemProps extends IWhatItem {
    align?: "flex-start" | "flex-end",
}

const useWhatItems = (): {
    left: IWhatItem[],
    right: IWhatItem[],
} => {
    const {t} = useTranslation();
    return {
        left: [
            {
                title: t("home.what.items.newLook.title"),
                subtitle: t("home.what.items.newLook.subtitle"),
                icon: <Brush color={"secondary"}/>,
            },
            {
                title: t("home.what.items.faster.title"),
                subtitle: t("home.what.items.faster.subtitle"),
                icon: <Bolt color={"secondary"}/>,
            },
        ],
        right: [
            {
                title: t("home.what.items.keepInSync.title"),
                subtitle: (
                    <Translate i18nKey={"home.what.items.keepInSync.subtitle"}>
                        Data are always in sync with the <PowerSchool/> server.
                    </Translate>
                ),
                icon: <Sync color={"secondary"}/>,
            },
            {
                title: t("home.what.items.reliable.title"),
                subtitle: t("home.what.items.reliable.subtitle"),
                icon: <GppGood color={"secondary"}/>,
            },
        ],
    };
};

export const What = () => {
    const {t} = useTranslation();
    return (
        <Stack sx={{bgcolor: "primary"}} pt={20}>
            <Container>
                <SectionHeader
                    title={t("home.what.title")}
                    subtitle={
                        <Translate i18nKey={"home.what.subtitle"}>
                            SchoolPower is a third-party client for <PowerSchool/>
                        </Translate>
                    }
                />
                <Stack display={{xs: "block", sm: "none"}}>
                    <Narrow/>
                </Stack>
                <Stack display={{xs: "none", sm: "block"}}>
                    <Wide/>
                </Stack>
            </Container>
        </Stack>
    );
};

const Wide = () => {
    const whatItems = useWhatItems();
    return (
        (
            <Stack pt={4} justifyContent={"center"} alignItems={"center"}>
                <Stack width={{xs: "30%", md: "332px"}} position={"absolute"} zIndex={5}>
                    <img width={"100%"} src={a}/>
                </Stack>
                <Grid
                    height={540}
                    mt={{xs: 0, md: 18}}
                    pt={4} pb={4}
                    pl={2} pr={2}
                    container
                    direction={"row"}
                    bgcolor={"primary.main"}
                    sx={{borderRadius: "30px"}}
                >
                    <Grid height={"100%"} item xs={2.75} sm={3} md={2.75} lg={3}>
                        <Stack height={"100%"} alignItems={"flex-end"}>
                            {whatItems.left.map((it, index) => (
                                <WideWhatItem
                                    key={index}
                                    align={"flex-end"}
                                    title={it.title}
                                    icon={it.icon}
                                    subtitle={it.subtitle}
                                />
                            ))}
                        </Stack>
                    </Grid>
                    <Grid height={"100%"} item xs={6.5} sm={6} md={6.5} lg={6} pl={8} pr={8}>
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
                    <Grid height={"100%"} item xs={2.75} sm={3} md={2.75} lg={3}>
                        <Stack height={"100%"}>
                            {whatItems.right.map((it, index) => (
                                <WideWhatItem
                                    key={index}
                                    align={"flex-start"}
                                    title={it.title}
                                    icon={it.icon}
                                    subtitle={it.subtitle}
                                />
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        )
    );
};

const Narrow = () => {
    const whatItems = useWhatItems();
    return (
        <Stack pt={4} alignItems={"center"} justifyContent={"center"}>
            <Stack
                p={2}
                position={"relative"}
                alignItems={"center"} justifyContent={"center"}
                bgcolor={"primary.main"}
                sx={{borderRadius: "30px"}}
            >
                <Stack pl={2} pr={2} pt={3} pb={2} width={"100%"} spacing={4} zIndex={1}>
                    {whatItems.left.map((it, index) => (
                        <NarrowWhatItem
                            key={index}
                            title={it.title}
                            icon={it.icon}
                            subtitle={it.subtitle}
                        />
                    ))}
                </Stack>
                <Stack overflow={"hidden"} position={"absolute"} width={"100%"} justifyContent={"center"} zIndex={0}>
                    <Box style={{
                        marginLeft: "-5%",
                        width: "110%",
                        aspectRatio: "1",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        opacity: 0.19,
                    }}/>
                </Stack>
                <Stack pt={3} pb={3} zIndex={1}>
                    <img width={"100%"} src={a}/>
                </Stack>
                <Stack pl={2} pr={2} pt={2} pb={4} width={"100%"} spacing={4} zIndex={1}>
                    {whatItems.right.map((it, index) => (
                        <NarrowWhatItem
                            key={index}
                            title={it.title}
                            icon={it.icon}
                            subtitle={it.subtitle}
                        />
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};

const WideWhatItem = ({align, title, subtitle, icon}: IWhatItemProps) => (
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
        <Typography pt={2} sx={{fontSize: 18, fontWeight: 600, textAlign: align == "flex-end" ? "end" : "start"}}>
            {title}
        </Typography>
        <Typography pt={2} sx={{fontSize: 12, textAlign: align == "flex-end" ? "end" : "start"}}>
            {subtitle}
        </Typography>
    </Stack>
);

const NarrowWhatItem = ({title, subtitle, icon}: IWhatItemProps) => (
    <Stack direction={"row"} alignItems={"center"} spacing={3}>
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
        <Stack flex={1} justifyContent={"center"} spacing={1}>
            <Typography sx={{fontSize: 18, fontWeight: 600}}>
                {title}
            </Typography>
            <Typography sx={{fontSize: 12}}>
                {subtitle}
            </Typography>
        </Stack>
    </Stack>
);
