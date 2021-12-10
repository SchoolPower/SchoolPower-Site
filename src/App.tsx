import { CssBaseline, ThemeProvider } from "@mui/material";
import { ScrollToTop } from "@schoolpower/components/ScrollToTop";
import { ToolBar } from "@schoolpower/components/ToolBar";
import { MUITheme } from "@schoolpower/constants/theme";
import { Home } from "@schoolpower/routes/Home/Home";
import { Support } from "@schoolpower/routes/Support/Support";
import { observer } from "mobx-react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = observer(() => {
    return (
        <ThemeProvider theme={MUITheme}>
            <BrowserRouter>
                <CssBaseline enableColorScheme/>
                <ToolBar/>
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/support/*" element={<Support/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
});
