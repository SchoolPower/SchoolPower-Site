import { ArrowBack } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const BackNav = ({title}: { title: string }) => {
    const navigate = useNavigate();
    return (
        <Stack direction={"row"} pt={4}>
            <IconButton onClick={() => navigate(-1)} sx={{marginLeft: -1}}>
                <ArrowBack color={"info"}/>
            </IconButton>
            <Typography pl={3} fontSize={24} fontWeight={600}>
                {title}
            </Typography>
        </Stack>
    );
};
