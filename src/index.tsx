import { App } from "@schoolpower/App";
import React from "react";
import { hydrate, render } from "react-dom";
import "i18n/index";
import "./emailjs";

const root = document.getElementById("root");

if (root?.hasChildNodes()) {
    hydrate(<App/>, root);
} else {
    render(<App/>, root);
}
