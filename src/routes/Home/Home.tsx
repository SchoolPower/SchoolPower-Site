import { Stack } from "@mui/material";
import { Landing } from "@schoolpower/routes/Home/Landing";
import React from "react";

const NonLanding = React.lazy(() => import("@schoolpower/routes/Home/NonLanding"));

const Home = () => {
    return (
        <Stack>
            <Landing/>
            <NonLanding/>
        </Stack>
    );
};

export default Home;
