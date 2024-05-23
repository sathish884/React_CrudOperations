import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import Sidebar from './SideBar/Sidebar';
import HeaderCom from './Header/HeaderCom';
const { Sider, Header, Content } = Layout;

const App = () => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (

    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Sidebar />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <HeaderCom />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>

  );
};
export default App;