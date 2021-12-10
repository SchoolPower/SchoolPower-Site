import { Container, Stack, Typography } from "@mui/material";
import { BackNav } from "@schoolpower/routes/Support/BackNav";
import React from "react";
import { QRCodeInstruction } from "@schoolpower/routes/Support/QRCodeInstruction";

import qrcode from "/public/WechatIMG685.png";

export const AliPay = () => (
    <Container>
        <Stack>
            <BackNav title={"Alipay"}/>
            <QRCodeInstruction
                qrCodeImageURL={qrcode}
                desktopInstruction={"支付宝「扫一扫」中用相机扫描此二维码"}
                mobileInstruction={"保存此二维码至手机相册，并在支付宝「扫一扫」中从相册选择"}
            />
            <Typography pt={4} pb={4} variant={"subtitle1"}>
                ご協力いただきありがとうございます！
            </Typography>
        </Stack>
    </Container>
);
