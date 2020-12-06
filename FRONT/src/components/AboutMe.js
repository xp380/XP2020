import React, {useState} from 'react'
import { Tabs } from 'antd';
import avatar from './avatar-gratuit.png'

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
  }
export default function AboutMe() {
    return <><div style={{textAlign: 'center'}}>C'est moi</div> <img src={avatar} style={{width:100 }} alt="logo" />
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Qui suis-je ?" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Mon Parcours" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Mon CV" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
  </>
}