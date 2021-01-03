import React, { Suspense } from 'react';
import { useTranslation } from "react-i18next";

function MyNews() {
    const { t } = useTranslation('News');
    return (
        <>
            <p>{t("intro")}</p>
        </>
    )
}

export default function News() {
    return <Suspense>
        <MyNews />
    </Suspense>
}
