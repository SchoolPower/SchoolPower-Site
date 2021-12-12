import { Container, Stack, Typography } from "@mui/material";
import { BackNav } from "@schoolpower/routes/Support/BackNav";
import { CryptoQRCodeInstruction } from "@schoolpower/routes/Support/CryptoQRCodeInstruction";
import { bitcoin } from "@schoolpower/routes/Support/Support";
import React from "react";

import qrcode from "/public/img/qrcode_bitcoin.png";

const bitcoinAddress = "3EF34mi84YvK2CLHy4bhjSwFCW3L4YLN1u";

export const Bitcoin = () => (
    <Container>
        <Stack>
            <BackNav title={"Bitcoin"}/>
            <CryptoQRCodeInstruction
                currencyIcon={bitcoin}
                qrCodeImageURL={qrcode}
                instruction={"请将捐款发送到以下比特币地址"}
                address={bitcoinAddress}
            />
            <Typography pt={4} pb={4} variant={"subtitle1"}>
                ご協力いただきありがとうございます！
            </Typography>
        </Stack>
    </Container>
);
