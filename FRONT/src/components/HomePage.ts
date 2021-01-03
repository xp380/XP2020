import React, { Suspense } from 'react'
import { useTranslation } from "react-i18next";

import Weather from './Weather/Weather'
import Covid from './Corona/Covid'

function Welcome() {
  const { t } = useTranslation(['traduction']);
  return (
    <div className="App">
      <header className="App-header">
        <p
          dangerouslySetInnerHTML={{
            __html: t("title", { name: "Vincent" }),
          }}
        />
        <Weather />
        <Covid />
      </header>
    </div>
  );
}

export default function HomePage() {
  return <Suspense fallback="Cargando traducciones...">
    <Welcome />
  </Suspense>
}

