import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    overrides?: {
      MuiInputLabel?: any;
      MuiTableCell?: any;
    };
  }
}

export const MUITheme = createTheme({
    palette: {
        primary: {
            main: "#0288d1"
        },
        secondary: {
            main: "#f48fb1"
        },
        error: {
            main: "#ff0000"
        },
    },
    typography: {
        "fontFamily": "\"Montserrat\", \"Helvetica\", \"Arial\", sans-serif",
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 600,
        "fontWeightBold": 700,
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
