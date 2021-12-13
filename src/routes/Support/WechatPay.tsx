import { Container, Stack } from "@mui/material";
import { BackNav } from "@schoolpower/routes/Support/BackNav";
import { QRCodeInstruction } from "@schoolpower/routes/Support/QRCodeInstruction";
import { Thanks } from "@schoolpower/routes/Support/Thanks";
import React from "react";
import { useTranslation } from "react-i18next";

import qrcode from "/public/img/qrcode_wechat_donation.png";

export const WechatPay = () => {
    const {t} = useTranslation();
    return (
        <Container>
            <Stack>
                <BackNav title={t("support.wechat.name")}/>
                <QRCodeInstruction
                    qrCodeImageURL={qrcode}
                    instructionKey={"support.wechat.instruction"}
                />
                <Thanks/>
            </Stack>
        </Container>
    );
};
