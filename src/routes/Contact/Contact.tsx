import { Send } from "@mui/icons-material";
import { Button, CircularProgress, Container, Stack, TextField, Typography } from "@mui/material";
import { Background } from "@schoolpower/components/Background";
import { Footer } from "@schoolpower/components/Footer";
import { ScrollToTop } from "@schoolpower/components/ScrollToTop";
import { Snack } from "@schoolpower/components/Snack";
import { useSimpleState } from "@schoolpower/hooks/useSimpleState";
import { send } from "emailjs-com";
import { observer } from "mobx-react";
import React, { FormEvent } from "react";
import { useTranslation } from "react-i18next";

const Contact = observer(() => {
    const {t} = useTranslation();
    const fromEmail = useSimpleState("");
    const subject = useSimpleState("");
    const message = useSimpleState("");

    const sending = useSimpleState(false);
    const sendSuccess = useSimpleState<string | null>(null);
    const sendError = useSimpleState<string | null>(null);

    const clear = () => {
        fromEmail.set("");
        subject.set("");
        message.set("");
    };

    const sendMessage = (e: FormEvent) => {
        e.preventDefault();
        if (sending.value) {
            return;
        }
        sending.set(true);

        const serviceID = "default_service";
        const templateID = "sp_contact";

        send(serviceID, templateID, {
            "origin": window.location.origin,
            "from_email": fromEmail.value,
            "subject": subject.value,
            "message": message.value,
        })
            .then(() => {
                clear();
                sending.set(false);
                sendSuccess.set(t("contact.form.sent"));
            }, (err) => {
                sending.set(false);
                sendError.set(`${t("contact.form.error")}: ${JSON.stringify(err)}`);
            });
    };
    return (
        <Stack>
            <ScrollToTop/>
            <Background color={"background.default"}>
                <Stack width={"100%"} height={"fit-content"} bgcolor={"primary.main"}>
                    <Container>
                        <Typography pt={16} pb={6} variant={"h3"} fontWeight={800}>
                            {t("contact.title")}
                        </Typography>
                    </Container>
                </Stack>
                <Container>
                    <Stack onSubmit={sendMessage} component={"form"} pt={4} pb={4} spacing={2} sx={{maxWidth: "800px"}}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label={t("contact.form.email")}
                            variant="outlined"
                            value={fromEmail.value}
                            onChange={(e) => fromEmail.set(e.target.value)}
                        />
                        <TextField
                            required
                            fullWidth
                            id="subject"
                            label={t("contact.form.subject")}
                            variant="outlined"
                            value={subject.value}
                            onChange={(e) => subject.set(e.target.value)}
                        />
                        <TextField
                            required
                            fullWidth
                            id="message"
                            multiline
                            minRows={5}
                            label={t("contact.form.message")}
                            variant="outlined"
                            value={message.value}
                            onChange={(e) => message.set(e.target.value)}
                        />
                        <Button
                            type={"submit"}
                            sx={{width: "fit-content"}}
                            color={"secondary"}
                            variant={"contained"}
                            endIcon={
                                sending.value ? (
                                    <CircularProgress
                                        sx={{
                                            color: "white",
                                            width: "20px !important",
                                            height: "20px !important"
                                        }}
                                    />
                                ) : <Send/>
                            }
                        >
                            {t("contact.form.send")}
                        </Button>
                    </Stack>
                </Container>
            </Background>
            <Footer/>
            <Snack
                open={!!sendSuccess.value}
                message={sendSuccess.value}
                severity={"success"}
                onClose={() => sendSuccess.set(null)}
            />
            <Snack
                open={!!sendError.value}
                message={sendError.value}
                severity={"error"}
                onClose={() => sendError.set(null)}
            />
        </Stack>
    );
});

export default Contact;
