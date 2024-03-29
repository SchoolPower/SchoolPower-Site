import { CircularProgress, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Background } from "@schoolpower/components/Background";
import { Redirect } from "@schoolpower/components/Redirect";
import { ToolBar } from "@schoolpower/components/ToolBar";
import { MUITheme } from "@schoolpower/constants/theme";
import Home from "@schoolpower/routes/Home/Home";
import { observer } from "mobx-react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Support = React.lazy(() => import("@schoolpower/routes/Support/Support"));
const Agreement = React.lazy(() => import("@schoolpower/routes/Agreement/Agreement"));
const Contact = React.lazy(() => import("@schoolpower/routes/Contact/Contact"));

export const App = observer(() => {
    return (
        <ThemeProvider theme={MUITheme}>
            <BrowserRouter>
                <CssBaseline enableColorScheme/>
                <ToolBar/>
                <React.Suspense fallback={
                    <Background sx={{justifyContent: "center", alignItems: "center"}}>
                        <CircularProgress color={"secondary"}/>
                    </Background>
                }>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/support/*" element={<Support/>}/>
                        <Route path="/eula" element={<Agreement/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/survey" element={<Redirect to={"https://wj.qq.com/s2/9348764/f46c"}/>}/>
                    </Routes>
                </React.Suspense>
            </BrowserRouter>
        </ThemeProvider>
    );
});
