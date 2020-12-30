import React, { Suspense } from 'react'
import { useTranslation } from "react-i18next";
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Join from './Socket/Join/Join'
// import Chat from './Socket/Chat/Chat'


function Welcome() {
  const { t } = useTranslation('traduction');

  return (
    <div className="App">
      <header className="App-header">
        <p>{t("forum")}</p>
        {/* <Router>
          <Route path='/' exact component={Join} />
          <Route path='/chat' component={Chat} />
        </Router> */}
      </header>
    </div>
  );
}


export default function Forum() {
  return <Suspense fallback="Chargement ...">
    <Welcome />
  </Suspense>
}