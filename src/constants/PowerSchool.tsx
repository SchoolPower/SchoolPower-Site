import { Link } from "@mui/material";
import React from "react";

const powerschoolURL = "https://www.powerschool.com/";

export const PowerSchool = ({color}: {
    color?: string,
}) => (
    <Link href={powerschoolURL} color={color ?? "info.main"} underline={"hover"}>
        PowerSchool®
    </Link>
);