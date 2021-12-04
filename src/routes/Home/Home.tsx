import { Stack } from "@mui/material";
import { Footer } from "@schoolpower/components/Footer";
import { Gallery } from "@schoolpower/routes/Home/Gallery";
import { Landing } from "@schoolpower/routes/Home/Landing";
import React from "react";

export const Home = () => {
    return (
        <Stack>
            <Landing/>
            <Gallery/>
            <What/>
            <How/>
            <Who/>
            <Credits/>
            <Footer/>
        </Stack>
    );
};


export const What = () => {
    return (
        <></>
    );
};

export const How = () => {
    return (
        <></>
    );
};

export const Who = () => {
    return (
        <></>
    );
};

export const Credits = () => {
    return (
        <></>
    );
};
