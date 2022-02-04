import { Alert, Snackbar } from "@mui/material";
import { AlertColor } from "@mui/material/Alert/Alert";
import React from "react";

export const Snack = ({
    open,
    message,
    severity,
    onClose,
}: {
    open: boolean,
    message: string | React.ReactNode,
    severity: AlertColor,
    onClose: () => void,
}) => {
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        onClose();
    };
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{width: "100%"}}>
                {message}
            </Alert>
        </Snackbar>
    );
};
