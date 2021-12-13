import { Container, Stack } from "@mui/material";
import { donationIcon } from "@schoolpower/constants/ImageResources";
import { BackNav } from "@schoolpower/routes/Support/BackNav";
import { CryptoQRCodeInstruction } from "@schoolpower/routes/Support/CryptoQRCodeInstruction";
import { Thanks } from "@schoolpower/routes/Support/Thanks";
import React from "react";
import { useTranslation } from "react-i18next";

import qrcode from "/public/img/qrcode_bitcoin.png";

const bitcoinAddress = "3EF34mi84YvK2CLHy4bhjSwFCW3L4YLN1u";

export const Bitcoin = () => {
    const {t} = useTranslation();
    return (
        <Container>
            <Stack>
                <BackNav title={t("support.bitcoin.name")}/>
                <CryptoQRCodeInstruction
                    currencyIcon={donationIcon("bitcoin")}
                    qrCodeImageURL={qrcode}
                    instruction={t("support.bitcoin.instruction")}
                    address={bitcoinAddress}
                />
                <Thanks/>
            </Stack>
        </Container>
    );
};
