import React, { FC } from "react";
import { Trans, useTranslation } from "react-i18next";

export const Translate: FC<{i18nKey: string}> = ({
    children,
    i18nKey,
}) => {
    const {t} = useTranslation();
    return (
        <Trans t={t} i18nKey={i18nKey}>
            {children}
        </Trans>
    );
};
