import React, { Suspense } from 'react'
import { useTranslation } from "react-i18next";


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
        {/* <button onClick={changeToEnglish}><img src={english} style={{width:100, height:100 }} alt="logo" /></button>
        <button onClick={changeToFrench}><img src={france} style={{width:100, height: 100 }} alt="logo" /></button> */}
      </header>
    </div>
  );
}

export default function HomePage() {
  return <Suspense fallback="Cargando traducciones...">
    <Welcome />
  </Suspense>
}

