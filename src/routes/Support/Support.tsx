import { ButtonBase, Container, Grid, Stack } from "@mui/material";
import { LinkWrapper } from "@schoolpower/components/ButtonLink";
import { Footer } from "@schoolpower/components/Footer";
import { Title } from "@schoolpower/components/PageTitle";
import { AliPay } from "@schoolpower/routes/Support/Alipay";
import { Background } from "@schoolpower/routes/Support/Background";
import { Bitcoin } from "@schoolpower/routes/Support/Bitcoin";
import { WechatPay } from "@schoolpower/routes/Support/WechatPay";
import React from "react";

import wechat from "/public/img/icon_wechat.png";
import alipay from "/public/img/icon_alipay.png";
import paypal from "/public/img/icon_paypal.png";
import bitcoin from "/public/img/icon_bitcoin.png";

import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

interface IDonationMethod {
    name: string,
    imageURL: string,
    targetURL: string,
    external?: boolean,
}

const donationMethods: IDonationMethod[] = [
    {
        name: "Wechat",
        imageURL: wechat,
        targetURL: "/support/wechat"
    },
    {
        name: "Alipay",
        imageURL: alipay,
        targetURL: "/support/alipay"
    },
    {
        name: "Paypal",
        imageURL: paypal,
        targetURL: "https://paypal.me/schoolpower",
        external: true,
    },
    {
        name: "Bitcoin",
        imageURL: bitcoin,
        targetURL: "/support/bitcoin"
    },
];

export const Support = () => (
    <Stack>
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
                        title={"Support Us"}
                        subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at imperdiet magna, in ornare ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris nec eros felis. Interdum et malesuada fames ac ante ipsum primis in faucibus."}
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
