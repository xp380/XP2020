import React from 'react'
import { Layout, Menu } from 'antd';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {DesktopOutlined,PieChartOutlined,FileOutlined,} from '@ant-design/icons';
import  HomePage  from './components/HomePage'
import  AboutMe  from './components/AboutMe';
import  Forum  from './components/Forum';

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  }; 
 
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  
  render() {
    const { collapsed } = this.state;

   
    return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/aboutMe">About ME</Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
            <Link to="/forum">Forum</Link>
            </Menu.Item>        
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/aboutMe" component={AboutMe} />
    <Route path="/forum" component={Forum} />
        </Switch>            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>This is the website designed by the great Vincent Kouoï</Footer>
        </Layout>
      </Layout>
    </Router>
    );
  }
}
  
export default App