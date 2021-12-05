import { Favorite } from "@mui/icons-material";
import { Button, Container, Stack } from "@mui/material";
import { ButtonLink } from "@schoolpower/components/ButtonLink";
import { ToolBarHeight } from "@schoolpower/constants/styles";
import React from "react";

import logo from "/public/ic_header-web copy.png";

export const ToolBar = () => {
    return (
        <Stack justifyContent={"center"} sx={{
            height: ToolBarHeight,
            top: 0,
            position: "sticky",
            bgcolor: "primary.main",
            zIndex: 100,
        }}>
            <Container>
                <Stack direction={"row"}>
                    <Stack justifyContent={"center"}>
                        <img height={"24px"} src={logo}/>
                    </Stack>
                    <Stack direction={"row"} ml={"auto"} spacing={3}>
                        <Stack direction={"row"} spacing={3} sx={{display: {xs: "none", md: "block"}}}>
                            <ButtonLink to={""}>Source Code</ButtonLink>
                            <ButtonLink to={""}>Web (Beta)</ButtonLink>
                            <ButtonLink to={""}>Contact Us</ButtonLink>
                        </Stack>
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
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    );
};
