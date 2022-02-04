import { Stack } from "@mui/material";
import { Background } from "@schoolpower/components/Background";
import { Landing } from "@schoolpower/routes/Home/Landing";
import React from "react";

const NonLanding = React.lazy(() => import("@schoolpower/routes/Home/NonLanding"));

const Home = () => {
    return (
        <Stack>
            <Landing/>
            <React.Suspense fallback={<Background/>}>
                <NonLanding/>
            </React.Suspense>
        </Stack>
    );
};

export default Home;
