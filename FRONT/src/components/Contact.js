import React, { Suspense } from 'react'
import { useTranslation } from "react-i18next";


function MyMessage() {
    const { t } = useTranslation('traduction');
    return (
        <>
            <p>{t("Message")}</p>
        </>
    )
}
export default function Contact() {
    return <Suspense fallback="Chargement ...">
        <MyMessage />
    </Suspense>
}