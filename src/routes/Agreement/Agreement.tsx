import { Card, CardContent, Container, Stack, Typography } from "@mui/material";
import { Background } from "@schoolpower/components/Background";
import { Footer } from "@schoolpower/components/Footer";
import { ScrollToTop } from "@schoolpower/components/ScrollToTop";
import React from "react";

const sections: { title: string, content: string }[] = [
    {
        title: "Definition",
        content: "This Application includes SchoolPower and its affiliated services from first-party channels, third-party channels, or compiled by yourself."
    },
    {
        title: "Disclaimer",
        content: "This Application is provided \"as is\" without making any representations or warranties. This Application does not guarantee the completeness and correctness of its contents. Please use it only for reference. This Application does not assume any responsibility for the use of This Application to cause your account to be locked or other exceptions.\n\nThis Application is a third-party client, and is not endorsed, sponsored, affiliated with or otherwise authorized by PowerSchool Group LLC or its affiliates."
    },
    {
        title: "Privacy",
        content: "You agree that This Application will record and permanently store the username, the operating system information, and the application's version you use and use it for statistical and analytical purposes."
    },
];

export const Agreement = () => (
    <Stack>
        <ScrollToTop/>
        <Background color={"background.default"}>
            <Stack width={"100%"} height={"fit-content"} bgcolor={"primary.main"}>
                <Container>
                    <Typography pt={16} pb={6} variant={"h3"} fontWeight={800}>
                        End User License Agreement
                    </Typography>
                </Container>
            </Stack>
            <Container>
                <Stack pt={4} pb={4} spacing={2}>
                    {sections.map((it, index) => (
                        <Card key={index} sx={{maxWidth: "800px"}}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {it.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{whiteSpace: "pre-line"}}>
                                    {it.content}
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
