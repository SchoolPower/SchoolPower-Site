import { Box, Drawer as MaterialDrawer, List, ListItem, ListItemText } from "@mui/material";
import { LinkWrapper } from "@schoolpower/components/ButtonLink";
import { navRoutes } from "@schoolpower/constants/Routes";
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
            <Box
                width={250}
                role="presentation"
            >
                <List>
                    {navRoutes.map((it, index) => it.external ? (
                        <ListItem button href={it.to} key={index}>
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
            </Box>
        </MaterialDrawer>
    );
};
