import React, {Suspense} from 'react'
import { Tabs } from 'antd';
import avatar from './avatar-gratuit.png'
import { useTranslation } from "react-i18next";
import english from './english.png'
import france from './france.png'

import Chart from './Chart'

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
  }

  function Welcome() {
    const { t, i18n } = useTranslation('welcome');
  
    function changeToEnglish() {
      i18n.changeLanguage("en");
    }
  
    function changeToFrench() {
      i18n.changeLanguage("fr");
    }
    
    
    return (
      <>
       <button onClick={changeToEnglish}><img src={english} style={{width:100, height:100 }} alt="logo" /></button>
          <button onClick={changeToFrench}><img src={france} style={{width:100, height: 100 }} alt="logo" /></button>
      <div style={{textAlign: 'center'}}>{t('me')}</div> <img src={avatar} style={{width:100 }} alt="logo" />
      <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab={t('who')} key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab={t('Way')} key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab={t('CV')} key="3">
        Content of Tab Pane 3
      </TabPane>
      <TabPane tab={t('data')} key="4">
        <Chart></Chart>
      </TabPane>
    </Tabs>
  
          </>
    );
  }
export default function AboutMe() {
    return <Suspense fallback="Chargement ...">
    <Welcome />
  </Suspense>
}