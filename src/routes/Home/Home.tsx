import { Stack } from "@mui/material";
import { Footer } from "@schoolpower/components/Footer";
import { Landing } from "@schoolpower/routes/Home/Landing";
import React from "react";

export const Home = () => {
    return (
        <Stack>
            <Landing/>
            <Gallary/>
            <What/>
            <How/>
            <Who/>
            <Credits/>
            <Footer/>
        </Stack>
    );
};
