import { ContentCopy, Done, Download } from "@mui/icons-material";
import { Button, Grid, IconButton, InputAdornment, OutlinedInput, Paper, Stack, Typography } from "@mui/material";
import { Snack } from "@schoolpower/components/Snack";
import { useSimpleState } from "@schoolpower/hooks/useSimpleState";
import { observer } from "mobx-react";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
    const cannotCopy = useSimpleState<string | null>(null);
    const {t} = useTranslation();

    const copyAddress = () => {
        try {
            navigator.clipboard
                .writeText(address)
                .then(() => {
                    copied.set(true);
                    setTimeout(() => {
                        copied.set(false);
                    }, 2000);
                });
        } catch (e) {
            if (typeof e === "string") {
                cannotCopy.set(e);
            } else if (e instanceof Error) {
                cannotCopy.set(e.message);
            }
        }
    };

    return (<Stack direction={{
            xs: "column",
            sm: "row",
        }} alignItems={"center"} pt={5} spacing={5}>
            <Grid
                container
                sx={{
                    width: "238px",
                    padding: "30px",
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
                <Stack spacing={2}>
                    <InstructionItem
                        icon={<LazyLoadImage style={{width: "100%", height: "100%"}} src={currencyIcon}/>}
                        text={instruction}
                    />
                    <Paper>
                        <StyledInput
                            fullWidth
                            value={address}
                            disabled
                            endAdornment={
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
                        {t("support.saveQRCode")}
                    </Button>
                </Stack>
            </Stack>
            <Snack
                open={!!cannotCopy.value}
                message={
                    <Trans
                        i18nKey="support.copyError"
                        defaults="Copy failed: {{error}}. Please copy manually."
                        values={{error: cannotCopy.value}}
                    />
                }
                severity={"error"}
                onClose={() => cannotCopy.set(null)}
            />
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
