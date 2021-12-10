import { Avatar, ButtonBase, Container, Stack, Typography } from "@mui/material";
import { SectionHeader } from "@schoolpower/components/SectionHeader";
import React from "react";

const whoItems: IWhoItem[] = [
    {
        name: "HITGIF",
        imageURL: "https://avatars.githubusercontent.com/u/16971971?s=400",
        profileURL: "https://github.com/HITGIF",
    },
    {
        name: "harrynull",
        imageURL: "https://avatars.githubusercontent.com/u/7413706?s=400",
        profileURL: "https://github.com/harrynull",
    },
];

interface IWhoItem {
    name: string;
    imageURL: string;
    profileURL: string;
}

export const Who = () => {
    return (
        <Stack sx={{bgcolor: "primary"}} pt={28} pb={28}>
            <Container>
                <SectionHeader
                    title={"Who made this"}
                    subtitle={"Built by graduates of MLES-ZJ"}
                />
                <Stack
                    pt={12}
                    spacing={15}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    {whoItems.map((it, index) => (
                        <WhoItem key={index} item={it}/>
                    ))}
                </Stack>
            </Container>
        </Stack>
    );
};

const WhoItem = ({item}: { item: IWhoItem }) => (
    <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
        <ButtonBase sx={{padding: 0, borderRadius: 76}} href={item.profileURL} target={"_blank"}>
            <Avatar
                alt={item.name}
                src={item.imageURL}
                sx={{width: 152, height: 152}}
            />
        </ButtonBase>
        <Typography variant={"subtitle1"} color={"primary.contrastText"} fontWeight={600}>
            {item.name}
        </Typography>
    </Stack>
);
