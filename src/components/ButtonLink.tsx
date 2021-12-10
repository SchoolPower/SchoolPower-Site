import { Button } from "@mui/material";
import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

export const ButtonLink = ({to, children}: {
    to: string,
    children?: React.ReactNode
}) => (
    <LinkWrapper to={to}>
        <Button color="inherit">
            {children}
        </Button>
    </LinkWrapper>
);

export const LinkWrapper = ({to, children, style}: {
    to: string,
    children?: React.ReactNode,
    style?: CSSProperties,
}) => (
    <Link to={to} style={{
        textDecoration: "inherit",
        color: "inherit",
        ...style,
    }}>
        {children}
    </Link>
);
