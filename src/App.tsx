import { CssBaseline, ThemeProvider } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MUITheme } from "./constants/theme";
import { Home } from "./routes/Home";

export const App = observer(() => {
    return (
        <ThemeProvider theme={MUITheme}>
            <BrowserRouter>
                <CssBaseline enableColorScheme/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
});
