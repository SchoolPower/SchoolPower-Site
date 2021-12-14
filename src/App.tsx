import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ToolBar } from "@schoolpower/components/ToolBar";
import { MUITheme } from "@schoolpower/constants/theme";
import { Agreement } from "@schoolpower/routes/Agreement/Agreement";
import { Contact } from "@schoolpower/routes/Contact/Contact";
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
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/support/*" element={<Support/>}/>
                    <Route path="/eula" element={<Agreement/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
});
