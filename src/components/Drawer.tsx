import { Box, Drawer as MaterialDrawer, List, ListItem, ListItemText, Stack } from "@mui/material";
import { LinkWrapper } from "@schoolpower/components/ButtonLink";
import { navRoutes } from "@schoolpower/constants/Routes";
import { LanguageSwitch } from "@schoolpower/i18n/LanguageSwitch";
import React from "react";
import { useTranslation } from "react-i18next";

export const Drawer = ({open, onClose}: { open: boolean, onClose: () => void }) => {
    const {t} = useTranslation();
    return (
        <MaterialDrawer
            anchor={"left"}
            open={open}
            onClose={onClose}
        >
            <Stack
                minHeight={"100%"}
                width={250}
                role="presentation"
            >
                <List>
                    {navRoutes.map((it, index) => it.external ? (
                        <ListItem button component="a" href={it.to} key={index} target={"_blank"}>
                            <ListItemText primary={t(it.nameKey)}/>
                        </ListItem>
                    ) : (
                        <LinkWrapper to={it.to} key={index}>
                            <ListItem button>
                                <ListItemText primary={t(it.nameKey)}/>
                            </ListItem>
                        </LinkWrapper>
                    ))}
                </List>
                <Stack mt={"auto"} p={2} sx={{display: {xs: "block", sm: "none"}}}>
                    <LanguageSwitch/>
                </Stack>
            </Stack>
        </MaterialDrawer>
    );
};
