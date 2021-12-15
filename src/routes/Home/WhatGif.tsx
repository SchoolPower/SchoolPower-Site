import { demoGif, demoGifStart } from "@schoolpower/constants/ImageResources";
import { hydrating } from "@schoolpower/index";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const GifPlayer = require("react-gif-player");

export const WhatGif = () => {
    if (!hydrating) {
        return null;
    }
    return (
        <GifPlayer width={"100%"} gif={demoGif} still={demoGifStart}/>
    );
};
