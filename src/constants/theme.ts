import { createTheme } from "@mui/material/styles";
import "@fontsource/plus-jakarta-sans/200.css";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";

export const MUITheme = createTheme({
    palette: {
        primary: {
            main: "#6AD4E2",
            contrastText: "#09314B"
        },
        secondary: {
            main: "#F178B6",
            contrastText: "#FFFFFF"
        },
        background: {
            default: "#EDFDFF",
        },
        error: {
            main: "#ff0000"
        },
    },
    typography: {
        "fontFamily": "\"Plus Jakarta Sans\", \"Helvetica\", \"Arial\", sans-serif",
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 600,
        "fontWeightBold": 800,
        button: {
            textTransform: "none"
        }
    },
    overrides: {
        MuiInputLabel: {
            root: {
                fontSize: "15px",
            }
        },
        MuiTableCell: {
            root: {
                height: "56px",
                padding: "4px 16px",
                fontWeight: 500,
                borderBottom: "none",
            },
            stickyHeader: {
                backgroundColor: "white",
                borderBottom: "1px solid #e0e0e0",
                fontWeight: 600,
            },
        },
    },
});

declare module "@mui/material/styles" {
    interface ThemeOptions {
        overrides?: {
            MuiInputLabel?: any;
            MuiTableCell?: any;
        };
    }
}
