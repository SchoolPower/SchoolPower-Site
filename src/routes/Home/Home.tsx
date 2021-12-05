import { Stack } from "@mui/material";
import { Footer } from "@schoolpower/components/Footer";
import { What } from "@schoolpower/components/What";
import { Credits } from "@schoolpower/routes/Home/Credits";
import { Gallery } from "@schoolpower/routes/Home/Gallery";
import { How } from "@schoolpower/routes/Home/How";
import { Landing } from "@schoolpower/routes/Home/Landing";
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
