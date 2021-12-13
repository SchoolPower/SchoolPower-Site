import { Card, CardContent, Container, Stack, Typography } from "@mui/material";
import { Background } from "@schoolpower/components/Background";
import { Footer } from "@schoolpower/components/Footer";
import { ScrollToTop } from "@schoolpower/components/ScrollToTop";
import React from "react";
import { useTranslation } from "react-i18next";

const sections: { title: string, content: string }[] = [
    {
        title: "agreement.definition.title",
        content: "agreement.definition.content"
    },
    {
        title: "agreement.disclaimer.title",
        content: "agreement.disclaimer.content"
    },
    {
        title: "agreement.privacy.title",
        content: "agreement.privacy.content"
    },
];

export const Agreement = () => {
    const {t} = useTranslation();
    return (
        <Stack>
            <ScrollToTop/>
            <Background color={"background.default"}>
                <Stack width={"100%"} height={"fit-content"} bgcolor={"primary.main"}>
                    <Container>
                        <Typography pt={16} pb={6} variant={"h3"} fontWeight={800}>
                            {t("agreement.title")}
                        </Typography>
                    </Container>
                </Stack>
                <Container>
                    <Stack pt={4} pb={4} spacing={2}>
                        {sections.map((it, index) => (
                            <Card key={index} sx={{maxWidth: "800px"}}>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {t(it.title)}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{whiteSpace: "pre-line"}}>
                                        {t(it.content)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </Container>
            </Background>
            <Footer/>
        </Stack>
    );
};
