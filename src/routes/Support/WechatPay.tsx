import { Container, Stack, Typography } from "@mui/material";
import { BackNav } from "@schoolpower/routes/Support/BackNav";
import React from "react";
import { QRCodeInstruction } from "@schoolpower/routes/Support/QRCodeInstruction";

import qrcode from "/public/img/qrcode_wechat_donation.png";

export const WechatPay = () => (
    <Container>
        <Stack>
            <BackNav title={"Wechat Pay"}/>
            <QRCodeInstruction
                qrCodeImageURL={qrcode}
                desktopInstruction={"微信「扫一扫」中用相机扫描此二维码"}
                mobileInstruction={"保存此二维码至手机相册，并在微信「扫一扫」中从相册选择"}
            />
            <Typography pt={4} pb={4} variant={"subtitle1"}>
                ご協力いただきありがとうございます！
            </Typography>
        </Stack>
    </Container>
);
