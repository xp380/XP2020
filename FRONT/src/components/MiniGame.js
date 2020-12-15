import React, { Suspense } from 'react'
import { useTranslation } from "react-i18next";


function MyGame() {
    const { t } = useTranslation('traduction');
    return (
        <>
            <p>{t("Game")}</p>
        </>
    )
}
export default function Contact() {
    return <Suspense fallback="Chargement ...">
        <MyGame />
    </Suspense>
}