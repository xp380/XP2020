import React, { Suspense } from 'react'
import { useTranslation } from "react-i18next";



function Welcome() {
  const { t } = useTranslation('traduction');

  return (
    <div className="App">
      <header className="App-header">
        <p>{t("forum")}</p>
        {/* <button onClick={changeToEnglish}><img src={english} style={{width:100, height:100 }} alt="logo" /></button>
          <button onClick={changeToFrench}><img src={france} style={{width:100, height: 100 }} alt="logo" /></button> */}
      </header>
    </div>
  );
}

// export default function Forum(){
//     return <div>Forum de discussion</div>
// }
export default function Forum() {
  return <Suspense fallback="Chargement ...">
    <Welcome />
  </Suspense>
}