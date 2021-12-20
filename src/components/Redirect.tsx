import { Container, Link, Stack, Typography } from "@mui/material";
import { Background } from "@schoolpower/components/Background";
import { Footer } from "@schoolpower/components/Footer";
import { Translate } from "@schoolpower/hooks/useTranslate";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

export const Redirect: FC<{
    to: string
}> = ({
    to
}) => {
    window.location.href = to;

    const {t} = useTranslation();

    const RedirectLink = () => (
        <Link href={to} color={"info.main"}>
            {t("redirect.button")}
        </Link>
    );

    return (
        <Stack>
            <Background>
                <Container>
                    <Typography variant={"h3"} fontWeight={700} pt={5}>
                        {t("redirect.title")}
                    </Typography>
                    <Typography pt={3}>
                        <Translate i18nKey={"redirect.message"}>
                            If you are not automatically redirected, click <RedirectLink/>
                        </Translate>
                    </Typography>
                </Container>
            </Background>
            <Footer/>
        </Stack>
    );
};
