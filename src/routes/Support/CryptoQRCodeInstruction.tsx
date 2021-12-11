import { ContentCopy, Done, Download } from "@mui/icons-material";
import { Button, Grid, IconButton, InputAdornment, OutlinedInput, Paper, Stack, Typography } from "@mui/material";
import { useSimpleState } from "@schoolpower/hooks/useSimpleState";
import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";

export interface QRCodeInstructionProps {
    currencyIcon: string;
    qrCodeImageURL: string;
    instruction: string;
    address: string;
}

export const CryptoQRCodeInstruction = observer(({
    currencyIcon,
    qrCodeImageURL,
    instruction,
    address,
}: QRCodeInstructionProps) => {
    const copied = useSimpleState(false);

    const copyAddress = () => {
        navigator.clipboard
            .writeText(address)
            .then(() => {
                copied.set(true);
                setTimeout(() => {
                    copied.set(false);
                }, 2000);
            });
    };

    return (<Stack direction={{
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
                    width: "75%",
                    height: "75%",
                }} src={qrCodeImageURL}/>
            </Grid>
            <Stack spacing={3}>
                <Stack spacing={2}>
                    <InstructionItem
                        icon={<img style={{width: "100%", height: "100%"}} src={currencyIcon}/>}
                        text={instruction}
                    />
                    <Paper>
                        <StyledInput fullWidth value={address} disabled endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="copy address"
                                    onClick={copyAddress}
                                    onMouseDown={copyAddress}
                                    edge="end"
                                >
                                    {copied.value ? <Done color={"secondary"}/> : <ContentCopy/>}
                                </IconButton>
                            </InputAdornment>
                        }/>
                    </Paper>
                </Stack>
                <Stack>
                    <Button variant={"contained"} color={"secondary"} sx={{
                        marginTop: 2,
                        width: "fit-content",
                    }} startIcon={<Download/>} href={qrCodeImageURL} download>
                        Save QR Code
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
});

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

const StyledInput = styled(OutlinedInput)`
    fieldset {
      border-color: transparent !important;
    }
`;
