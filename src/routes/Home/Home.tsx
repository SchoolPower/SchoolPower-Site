import { Stack } from "@mui/material";
import { Footer } from "@schoolpower/components/Footer";
import { Credits } from "@schoolpower/routes/Home/Credits";
import { Gallery } from "@schoolpower/routes/Home/Gallery";
import { How } from "@schoolpower/routes/Home/How";
import { Landing } from "@schoolpower/routes/Home/Landing";
import { What } from "@schoolpower/routes/Home/What";
import { Who } from "@schoolpower/routes/Home/Who";
import React from "react";

export const Home = () => {
    return (
        <Stack>
            <Landing/>
            <What/>
            <Gallery/>
            <How/>
            <Who/>
            <Credits/>
            <Footer/>
        </Stack>
    );
};
