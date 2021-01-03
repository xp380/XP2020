import React, { Suspense } from 'react'
import { Tabs, Carousel } from 'antd';
import { useTranslation } from "react-i18next";

import avatar from './pictures/avatar-gratuit.png'


import WildCircus from './pictures/WildCircus.png'
import WildCircus2 from './pictures/WildCircus2.png'
import WildCircus3 from './pictures/WildCircus3.png'
import Pollution from './pictures/Pollution.png'
import Pollution2 from './pictures/Pollution2.png'


import Area from './Chart/Area'
import Radar from './Chart/Radar'
import Pie from './Chart/Pie'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function Welcome() {
  const { t } = useTranslation(['traduction', 'Me']);

  return (
    <>

      <div style={{ textAlign: 'center' }}>{t('me')}</div> <img src={avatar} style={{ width: 100 }} alt="logo" />
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab={t('who')} key="1">
          {t('Me:presentation')}
        </TabPane>
        <TabPane tab={t('Way')} key="2">
          {t('Me:parcours')}
        </TabPane>
        <TabPane tab={t('data')} key="3">
          <Radar></Radar>
          <Pie></Pie>
          <Area></Area>
        </TabPane>
        <TabPane tab={t('projets')} key="4">
          {t('Me:accomplissements')}
          <Carousel>
            <div>
              <h3 style={contentStyle}><img src={WildCircus} style={{ width: 300, height: 300 }} alt="logo" /></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img src={WildCircus2} style={{ width: 300, height: 300 }} alt="logo" /></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img src={WildCircus3} style={{ width: 300, height: 300 }} alt="logo" /></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img src={Pollution} style={{ width: 300, height: 300 }} alt="logo" /></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img src={Pollution2} style={{ width: 300, height: 300 }} alt="logo" /></h3>
            </div>
          </Carousel>
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


//Utiliser Timeline de Antd