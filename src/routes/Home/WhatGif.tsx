import { demoGif, demoGifStart } from "@schoolpower/constants/ImageResources";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const GifPlayer = require("react-gif-player");

export const WhatGif = () => (
    <GifPlayer width={"100%"} gif={demoGif} still={demoGifStart}/>
);
