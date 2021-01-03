import React, { useState, Suspense } from 'react'
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DesktopOutlined, PieChartOutlined, FileOutlined, GiftOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";


import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe';
import Gallery from './components/Gallery';
import News from './components/News'
import Contact from './components/Contact'
import MiniGame from './components/MiniGame'
import Movies from './components/Movies'
import Join from './components/Socket/Join/Join'
import Chat from './components/Socket/Chat/Chat'

import english from './components/pictures/english.png'
import france from './components/pictures/france.png'
import logo from './components//pictures/logo.png'

const { Header, Content, Footer, Sider } = Layout;



function DashBoard() {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed({ collapsed });
  };

  const { t, i18n } = useTranslation('Accueil');

  function changeToEnglish() {
    i18n.changeLanguage("en");
  }

  function changeToFrench() {
    i18n.changeLanguage("fr");
  }

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <img src={logo} style={{ width: 70, height: 60 }} alt="logo" />

          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/"> {t('Home')} </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/aboutMe">{t('About')}</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<FileOutlined />}>
              <Link to="/gallery">{t('Gallerie')}</Link>
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
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, textAlign: 'right', color: "white" }}>
            <button onClick={changeToEnglish}><img src={english} style={{ width: 40, height: 40 }} alt="logo" /></button>
            <button onClick={changeToFrench}><img src={france} style={{ width: 40, height: 40 }} alt="logo" /></button>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/aboutMe" component={AboutMe} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/news" component={News} />
                <Route path="/contact" component={Contact} />
                <Route path="/minigame" component={MiniGame} />
                <Route path="/movies" component={Movies} />
                <Route path="/join" component={Join} />
                <Route path="/chat" component={Chat} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>This is the website designed by the great Vincent Kouoï</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}


export default function App() {
  return <Suspense fallback="Chargement ..."><DashBoard />
  </Suspense>
}
// class App extends React.Component {
//   state = {
//     collapsed: false,
//   };

  // onCollapse = collapsed => {
  //   console.log(collapsed);
  //   this.setState({ collapsed });
  // };

//   render() {
//     const { collapsed } = this.state;


//     return (
//       <Router>
//         <Layout style={{ minHeight: '100vh' }}>
//           <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
//             <div className="logo" />
//             <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//               <Menu.Item key="1" icon={<PieChartOutlined />}>
//                 <Link to="/">Home</Link>
//               </Menu.Item>
//               <Menu.Item key="2" icon={<DesktopOutlined />}>
//                 <Link to="/aboutMe">About ME</Link>
//               </Menu.Item>
//               <Menu.Item key="9" icon={<FileOutlined />}>
//                 <Link to="/forum">Forum</Link>
//               </Menu.Item>
//               <Menu.Item key="5" icon={<FileOutlined />}>
//                 <Link to="/news">Breaking News</Link>
//               </Menu.Item>
//             </Menu>
//           </Sider>
//           <Layout className="site-layout">
//             <Header className="site-layout-background" style={{ padding: 0, textAlign: 'center', color: "white" }}> this</Header>
//             <Content style={{ margin: '0 16px' }}>
//               <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//                 <Switch>
//                   <Route exact path="/" component={HomePage} />
//                   <Route path="/aboutMe" component={AboutMe} />
//                   <Route path="/forum" component={Forum} />
//                   <Route path="/news" component={News} />

//                 </Switch>            </div>
//             </Content>
//             <Footer style={{ textAlign: 'center' }}>This is the website designed by the great Vincent Kouoï</Footer>
//           </Layout>
//         </Layout>
//       </Router>
//     );
//   }
// }

// export default App