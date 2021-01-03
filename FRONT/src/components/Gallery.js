import React, { Suspense } from 'react'
import { useTranslation } from "react-i18next";



function Welcome() {
  const { t } = useTranslation('traduction');

  return (
    <div className="App">
      <header className="App-header">
        <p>{t("forum")}</p>
      </header>
    </div>
  );
}


export default function Forum() {
  return <Suspense fallback="Chargement ...">
    <Welcome />
  </Suspense>
}