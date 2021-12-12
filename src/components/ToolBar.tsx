import { Download, Favorite, Menu } from "@mui/icons-material";
import { Button, ButtonBase, Container, IconButton, Stack } from "@mui/material";
import { ButtonLink, LinkWrapper } from "@schoolpower/components/ButtonLink";
import { Drawer } from "@schoolpower/components/Drawer";
import { headerLogo } from "@schoolpower/constants/ImageResources";
import { navRoutes } from "@schoolpower/constants/Routes";
import { ToolBarHeight } from "@schoolpower/constants/styles";
import { useSimpleState } from "@schoolpower/hooks/useSimpleState";
import { observer } from "mobx-react";
import React from "react";
import { useLocation } from "react-router-dom";

export const ToolBar = observer(() => {
    const location = useLocation();
    const drawerOpen = useSimpleState(false);
    return (
        <>
            <Stack justifyContent={"center"} sx={{
                height: ToolBarHeight,
                top: 0,
                position: "sticky",
                bgcolor: "primary.main",
                zIndex: 100,
            }}>
                <Container>
                    <Stack direction={"row"}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{
                                mr: 1,
                                height: "48px",
                                display: {xs: "block", md: "none"},
                            }}
                            onClick={() => drawerOpen.set(true)}
                        >
                            <Menu sx={{mb: 1}}/>
                        </IconButton>
                        <Stack justifyContent={"center"}>
                            <LinkWrapper to={"/"}>
                                <ButtonBase sx={{
                                    padding: "4px",
                                    borderRadius: "8px",
                                    display: {xs: "block", sm: "none"}
                                }}>
                                    <img height={"24px"} src={headerLogo()}/>
                                </ButtonBase>
                                <ButtonBase sx={{
                                    padding: "4px",
                                    borderRadius: "8px",
                                    display: {xs: "none", sm: "block"}
                                }}>
                                    <img height={"24px"} src={headerLogo(true)}/>
                                </ButtonBase>
                            </LinkWrapper>
                        </Stack>
                        <Stack direction={"row"} ml={"auto"} spacing={3} alignItems={"center"}>
                            <Stack direction={"row"} spacing={3} sx={{display: {xs: "none", md: "block"}}}>
                                {navRoutes.map((it, index) => it.external ? (
                                    <Button color="inherit" href={it.to}>{it.name}</Button>
                                ) : (
                                    <ButtonLink key={index} to={it.to}>{it.name}</ButtonLink>
                                ))}
                            </Stack>
                            {location.pathname !== "/" ? (
                                <LinkWrapper to={"/"}>
                                    <Button
                                        sx={{
                                            borderRadius: 20,
                                            paddingLeft: 2.5,
                                            paddingRight: 2.5,
                                        }}
                                        variant="contained"
                                        color={"secondary"}
                                        startIcon={<Download/>}
                                    >
                                        Download
                                    </Button>
                                </LinkWrapper>
                            ) : (
                                <LinkWrapper to={"/support"}>
                                    <Button
                                        sx={{
                                            borderRadius: 20,
                                            paddingLeft: 2.5,
                                            paddingRight: 2.5,
                                        }}
                                        variant="contained"
                                        color={"secondary"}
                                        startIcon={<Favorite/>}
                                    >
                                        Support Us
                                    </Button>
                                </LinkWrapper>
                            )}
                        </Stack>
                    </Stack>
                </Container>
            </Stack>
            <Drawer open={drawerOpen.value} onClose={() => drawerOpen.set(false)}/>
        </>
    );
});
