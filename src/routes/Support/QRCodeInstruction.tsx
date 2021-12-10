import { Download, Laptop, PhoneIphone } from "@mui/icons-material";
import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export interface QRCodeInstructionProps {
    qrCodeImageURL: string;
    desktopInstruction: string;
    mobileInstruction: string;
}

export const QRCodeInstruction = ({
    qrCodeImageURL,
    desktopInstruction,
    mobileInstruction,
}: QRCodeInstructionProps) => (
    <Stack direction={{
        xs: "column",
        sm: "row",
    }} alignItems={"center"} pt={5} spacing={5}>
        <Grid
            container
            sx={{
                width: "238px",
                aspectRatio: "1",
                bgcolor: "white",
                borderRadius: "30px",
            }}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <img style={{
                width: "90%",
                height: "90%",
            }} src={qrCodeImageURL}/>
        </Grid>
        <Stack spacing={3}>
            <InstructionItem
                icon={<Laptop color={"secondary"}/>}
                text={desktopInstruction}
            />
            <Stack>
                <InstructionItem
                    icon={<PhoneIphone color={"secondary"}/>}
                    text={mobileInstruction}
                />
                <Button variant={"contained"} color={"secondary"} sx={{
                    marginLeft: 8,
                    marginTop: 2,
                    width: "fit-content",
                }} startIcon={<Download/>} href={qrCodeImageURL} download>
                    Save
                </Button>
            </Stack>
        </Stack>
    </Stack>
);

interface IInstructionItemProps {
    icon: React.ReactNode;
    text: string;
}

const InstructionItem = ({icon, text}: IInstructionItemProps) => (
    <Stack direction={"row"} maxWidth={"400px"} spacing={3} alignItems={"center"}>
        <Stack sx={{
            minWidth: 40,
            width: 40,
            height: 40,
            borderRadius: 20,
            bgcolor: "secondary.contrastText",
            justifyContent: "center",
            alignItems: "center",
        }}>
            {icon}
        </Stack>
        <Typography color={"primary.contrastText"} fontWeight={500}>
            {text}
        </Typography>
    </Stack>
);
