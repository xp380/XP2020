import React, { useState, useEffect, Suspense } from 'react'
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DesktopOutlined, PieChartOutlined, FileOutlined, GiftOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import axios from 'axios';

import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe';
import News from './components/News'
import Contact from './components/Contact'
import MiniGame from './components/MiniGame'
import Movies from './components/Movies'
import Join from './components/Socket/Join/Join'
import Chat from './components/Socket/Chat/Chat'
import Time from './components/Time'
import Login from './components/Login';

import PrivateRoute from './components/Utils/PrivateRoute'
import PublicRoute from './components/Utils/PublicRoute'
import { getToken, removeUserSession, setUserSession } from './components//Utils/Common';


import english from './components/pictures/english.png'
import france from './components/pictures/france.png'
import logo from './components//pictures/logo.png'

const { Header, Content, Footer, Sider } = Layout;



function DashBoard() {
  const [authLoading, setAuthLoading] = useState(true);
  const [collapsed, setCollapsed] = useState(false)
  const [useTime] = useState(new Date())


  const { t, i18n } = useTranslation('Accueil');

  function changeToEnglish() {
    i18n.changeLanguage("en");
  }

  function changeToFrench() {
    i18n.changeLanguage("fr");
  }

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <img src={logo} style={{ width: 70, height: 60 }} alt="logo" />

          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/"> {t('Home')} </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/aboutMe">{t('About')}</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<FileOutlined />}>
              <Link to="/news">{t('News')}</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<FileOutlined />}>
              <Link to="/contact">{t('Contact')}</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<GiftOutlined />}>
              <Link to="/minigame">{t('Game')}</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<GiftOutlined />}>
              <Link to="/movies">Films</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<GiftOutlined />}>
              <Link to="/join">Join</Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<GiftOutlined />}>
              <Link to="/chat">Chat</Link>
            </Menu.Item>
            <Menu.Item key="10" icon={<GiftOutlined />}>
              <Link to="/login">Login</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, textAlign: 'right', color: "white" }}>
            <p style={{ padding: 0, textAlign: 'left' }}>{useTime.toLocaleDateString()} {useTime.toLocaleTimeString()}</p>
            <button onClick={changeToEnglish}><img src={english} style={{ width: 40, height: 40 }} alt="logo" /></button>
            <button onClick={changeToFrench}><img src={france} style={{ width: 40, height: 40 }} alt="logo" /></button>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <PrivateRoute path="/aboutMe" component={AboutMe} />
                <PrivateRoute path="/news" component={News} />
                <PrivateRoute path="/contact" component={Contact} />
                <PrivateRoute path="/minigame" component={MiniGame} />
                <PrivateRoute path="/movies" component={Movies} />
                <PrivateRoute path="/join" component={Join} />
                <PrivateRoute path="/chat" component={Chat} />
                <PublicRoute path='/login' component={Login} />
              </Switch>
              <Time />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', fontWeight: 'bold' }}>XP3000 designed by Vincent Kouoï</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}


export default function App() {
  return <Suspense fallback="Chargement ..."><DashBoard />
  </Suspense>
}
