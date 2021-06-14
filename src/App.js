import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';


import {Update as Boss} from "./components/boss"
import {Update as Hiper} from "./components/hiper"
import {Update as Exp} from "./components/exp"
import {Update as Core} from "./components/core"

import bg1 from './assets/images/bg1.png'

const { Content, Footer, Sider } = Layout;

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menuTap : 1
    };

    this.handleChangeMenu = this.handleChangeMenu.bind(this);
  }
  
  handleChangeMenu(e) {
    this.setState({
      menuTap : parseInt(e.key)
    });
  }


  render() {
    const {menuTap} = this.state;

    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />} onClick={this.handleChangeMenu}>
              보스돌이 정리하기
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={this.handleChangeMenu}>
              하이퍼스텟 시뮬
            </Menu.Item>
            <Menu.Item key="3" icon={<BarChartOutlined />} onClick={this.handleChangeMenu}>
              코어강화
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />} onClick={this.handleChangeMenu}>
              경험치표
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200, minHeight: `${window.innerHeight}px`, backgroundImage: `url(${bg1})` }}>
          <Content style={{ margin: "24px 10% 0", width: "80%", overflow: "initial", opacity: 0.9 }}>
            <div
              className="site-layout-background"
              style={{ padding: 24 }}
            >
              {menuTap === 1 && <Boss />}
              {menuTap === 2 && <Hiper />}
              {menuTap === 3 && <Core />}
              {menuTap === 4 && <Exp />}              
              
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Maple ©2021 Created by MJ
          </Footer>
        </Layout>
      </Layout>
    );
  }
}


export default App;
