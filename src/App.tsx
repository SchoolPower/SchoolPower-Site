import { Favorite } from "@mui/icons-material";
import { Button, Container, CssBaseline, Grid, Stack, ThemeProvider } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ButtonLink } from "./components/ButtonLink";
import { MUITheme } from "./constants/theme";
import { Home } from "./routes/Home/Home";

import logo from "/public/ic_header-web copy.png";

export const App = observer(() => {

    const Header = () => {
        return (
            <Stack justifyContent={"center"} sx={{height: 100, top: 0, position: "sticky", bgcolor: "primary.main"}}>
                <Container>
                    <Stack direction={"row"}>
                        <Stack justifyContent={"center"}>
                            <img height={"24px"} src={logo}/>
                        </Stack>
                        <Stack direction={"row"} ml={"auto"} spacing={3}>
                            <ButtonLink to={""}>Source Code</ButtonLink>
                            <ButtonLink to={""}>Web (Beta)</ButtonLink>
                            <ButtonLink to={""}>Contact Us</ButtonLink>
                            <Button variant="contained" color={"secondary"} startIcon={<Favorite/>}>
                                Support Us
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </Stack>
        );
    };

    return (
        <ThemeProvider theme={MUITheme}>
            <BrowserRouter>
                <CssBaseline enableColorScheme/>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
});
