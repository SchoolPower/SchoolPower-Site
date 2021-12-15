import { demoGif, demoGifStart } from "@schoolpower/constants/ImageResources";
import React from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const GifPlayer = require("react-gif-player");

export const WhatGif = () => {
    return (
        <LazyLoadComponent>
            <GifPlayer width={"100%"} gif={demoGif} still={demoGifStart}/>
        </LazyLoadComponent>
    );
};
