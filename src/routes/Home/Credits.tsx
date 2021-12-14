import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
    Avatar,
    Card,
    Chip,
    Collapse,
    Container,
    Grid,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack
} from "@mui/material";
import { SectionHeader } from "@schoolpower/components/SectionHeader";
import { credits } from "@schoolpower/constants/credits/credits";
import { creditIdsByType, creditSections, ICreditSection } from "@schoolpower/constants/credits/sections";
import { useSimpleState } from "@schoolpower/hooks/useSimpleState";
import { observer } from "mobx-react";
import React from "react";
import { useTranslation } from "react-i18next";

const CreditSection = observer(({section}: { section: ICreditSection }) => {
    const {t} = useTranslation();
    const creditIds = creditIdsByType.get(section.type) ?? [];
    const open = useSimpleState(creditIds.length > 0);
    return (
        <>
            <ListItemButton onClick={open.toggle}>
                <ListItemIcon>
                    {section.icon}
                </ListItemIcon>
                <ListItemText primary={t(section.titleKey)}/>
                {open.value ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={open.value} timeout="auto" unmountOnExit>
                <Grid container p={2} minHeight={56} spacing={1}>
                    {creditIds.map((it, index) => (
                        <Grid key={index} item>
                            <Chip avatar={
                                <Avatar src={credits[it].imageURL} sx={{
                                    color: "white !important",
                                    bgcolor: credits[it].color
                                }}>
                                    {!credits[it].imageURL ? credits[it].name.charAt(0) : ""}
                                </Avatar>
                            } label={credits[it].name}/>
                        </Grid>
                    ))}
                </Grid>
            </Collapse>
        </>
    );
});


export const Credits = () => {
    const {t} = useTranslation();
    return (
        <Stack sx={{bgcolor: "primary.main"}} pt={13} pb={13}>
            <Container>
                <SectionHeader
                    title={t("home.credits.title")}
                    subtitle={t("home.credits.subtitle")}
                />
                <Grid container justifyContent={"center"} pt={8} pb={4}>
                    <Grid item xs={12} sm={8} lg={6}>
                        <Card sx={{borderRadius: 3}}>
                            <List
                                sx={{width: "100%", bgcolor: "background.paper", padding: 0}}
                                component="nav"
                            >
                                {creditSections.map((it, index) => (
                                    <CreditSection section={it} key={index}/>
                                ))}
                            </List>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    );
};
