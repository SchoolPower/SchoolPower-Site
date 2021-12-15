import { Download, Laptop, PhoneIphone } from "@mui/icons-material";
import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

export interface QRCodeInstructionProps {
    qrCodeImageURL: string;
    instructionKey: string
}

export const QRCodeInstruction = ({
    qrCodeImageURL,
    instructionKey,
}: QRCodeInstructionProps) => {
    const {t} = useTranslation();
    return (
        <Stack direction={{
            xs: "column",
            sm: "row",
        }} alignItems={"center"} pt={5} spacing={5}>
            <Grid
                container
                sx={{
                    width: "238px",
                    padding: "15px",
                    bgcolor: "white",
                    borderRadius: "30px",
                }}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <LazyLoadImage style={{
                    width: "100%",
                    height: "100%",
                }} src={qrCodeImageURL}/>
            </Grid>
            <Stack spacing={3}>
                <InstructionItem
                    icon={<Laptop color={"secondary"}/>}
                    text={t(`${instructionKey}.desktop`)}
                />
                <Stack>
                    <InstructionItem
                        icon={<PhoneIphone color={"secondary"}/>}
                        text={t(`${instructionKey}.mobile`)}
                    />
                    <Button variant={"contained"} color={"secondary"} sx={{
                        marginLeft: 8,
                        marginTop: 2,
                        width: "fit-content",
                    }} startIcon={<Download/>} href={qrCodeImageURL} download>
                        {t("support.save")}
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};

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
