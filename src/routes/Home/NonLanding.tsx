import { Footer } from "@schoolpower/components/Footer";
import { Credits } from "@schoolpower/routes/Home/Credits";
import { Gallery } from "@schoolpower/routes/Home/Gallery";
import { How } from "@schoolpower/routes/Home/How";
import { What } from "@schoolpower/routes/Home/What";
import { Who } from "@schoolpower/routes/Home/Who";
import React from "react";

const NonLanding = () => {
    return (
        <>
            <What/>
            <Gallery/>
            <How/>
            <Who/>
            <Credits/>
            <Footer/>
        </>
    );
};

export default NonLanding;
