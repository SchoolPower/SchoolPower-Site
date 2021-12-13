import { ButtonBase, Container, Grid, Stack } from "@mui/material";
import { Background } from "@schoolpower/components/Background";
import { LinkWrapper } from "@schoolpower/components/ButtonLink";
import { Footer } from "@schoolpower/components/Footer";
import { Title } from "@schoolpower/components/PageTitle";
import { ScrollToTop } from "@schoolpower/components/ScrollToTop";
import { donationIcon } from "@schoolpower/constants/ImageResources";
import { AliPay } from "@schoolpower/routes/Support/Alipay";
import { Bitcoin } from "@schoolpower/routes/Support/Bitcoin";
import { WechatPay } from "@schoolpower/routes/Support/WechatPay";
import React from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

interface IDonationMethod {
    nameKey: string,
    imageURL: string,
    targetURL: string,
    external?: boolean,
}

const donationMethods: IDonationMethod[] = [
    {
        nameKey: "support.wechat.name",
        imageURL: donationIcon("wechat"),
        targetURL: "/support/wechat"
    },
    {
        nameKey: "support.alipay.name",
        imageURL: donationIcon("alipay"),
        targetURL: "/support/alipay"
    },
    {
        nameKey: "support.paypal.name",
        imageURL: donationIcon("paypal"),
        targetURL: "https://paypal.me/schoolpower",
        external: true,
    },
    {
        nameKey: "support.bitcoin.name",
        imageURL: donationIcon("bitcoin"),
        targetURL: "/support/bitcoin"
    },
];

export const Support = () => (
    <Stack>
        <ScrollToTop/>
        <Background>
            <Routes>
                <Route path="/" element={<SupportPage/>}/>
                <Route path="wechat" element={<WechatPay/>}/>
                <Route path="alipay" element={<AliPay/>}/>
                <Route path="bitcoin" element={<Bitcoin/>}/>
            </Routes>
        </Background>
        <Footer/>
    </Stack>
);

const SupportPage = () => {
    const {t} = useTranslation();
    const ImageButton = ({imageURL, href}: {
        imageURL: string,
        href?: string,
    }) => (
        <ButtonBase href={href ?? ""} target={"_blank"} sx={{
            width: "100%",
            height: "100%",
            borderRadius: "30px",
        }}>
            <img style={{
                width: "75%",
                height: "75%",
            }} src={imageURL}/>
        </ButtonBase>
    );

    return (
        <Container>
            <Stack justifyContent={"center"} alignItems={"center"} height={"100%"}>
                <Grid pt={{
                    xs: "56px",
                    lg: "max(56px, 12vh)"
                }} pb={5} container item justifyContent={"center"}>
                    <Title
                        title={t("support.title")}
                        subtitle={t("support.subtitle")}
                    />
                </Grid>
                <Grid
                    container
                    pb={{
                        xs: "112px",
                        lg: "max(120px, 24vh)"
                    }}
                    spacing={4}
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{
                        marginTop: "auto",
                        marginBottom: "auto",
                        width: {
                            xs: "100%",
                            sm: "464px", // (200 + 32) * 2 [(width + padding) * column]
                            lg: "928px", // (200 + 32) * 4
                        }
                    }}
                >
                    {donationMethods.map((it, index) => (
                        <Grid
                            item
                            container
                            key={index}
                            xs={6}
                            lg={3}
                            alignItems={"center"}
                            justifyContent={"center"}
                        >
                            <ImageContainer
                                container
                                sx={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    bgcolor: "white",
                                    borderRadius: "30px",
                                }}
                                alignItems={"center"}
                                justifyContent={"center"}
                            >
                                {it.external ? (
                                    <ImageButton href={it.targetURL} imageURL={it.imageURL}/>
                                ) : (
                                    <LinkWrapper style={{
                                        width: "100%",
                                        height: "100%",
                                    }} to={it.targetURL}>
                                        <ImageButton imageURL={it.imageURL}/>
                                    </LinkWrapper>
                                )}
                            </ImageContainer>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Container>
    );
};

const ImageContainer = styled(Grid)`
  transition: box-shadow .2s;

  :hover {
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
