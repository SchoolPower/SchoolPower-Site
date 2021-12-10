import { ArrowBack } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { LinkWrapper } from "@schoolpower/components/ButtonLink";
import React from "react";

export const BackNav = ({title}: { title: string }) => (
    <Stack direction={"row"} pt={4}>
        <LinkWrapper to={"/support"}>
            <IconButton sx={{marginLeft: -1}}>
                <ArrowBack color={"info"}/>
            </IconButton>
        </LinkWrapper>
        <Typography pl={3} fontSize={24} fontWeight={600}>
            {title}
        </Typography>
    </Stack>
);
