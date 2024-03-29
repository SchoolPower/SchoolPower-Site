import { Language } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { useSimpleState } from "@schoolpower/hooks/useSimpleState";
import { getLocale, setLocale } from "@schoolpower/i18n/index";
import { locales } from "@schoolpower/i18n/Locale";
import { observer } from "mobx-react";
import React from "react";

export const LanguageSwitch = observer(() => {
    const anchor = useSimpleState<null | HTMLElement>(null);
    const open = Boolean(anchor.value);
    const close = () => anchor.set(null);
    return (
        <>
            <Button
                startIcon={<Language/>}
                color={"inherit"}
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={(e) => anchor.set(e.currentTarget)}
            >
                {getLocale().name}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchor.value}
                open={open}
                onClose={close}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                {locales.map((it, index) => (
                    <MenuItem key={index} onClick={() => {
                        setLocale(it);
                        close();
                    }}>
                        {it.name}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
});
