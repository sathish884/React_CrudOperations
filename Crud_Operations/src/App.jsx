import React, { useState } from 'react';
import { Layout, theme, Breadcrumb } from 'antd';
import Sidebar from './SideBar/Sidebar';
import HeaderCom from './Header/HeaderCom';
import RoutersNav from './Routers/RoutersNav';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
const { Sider, Header, Content } = Layout;
import { menuData } from './SideBar/Sidebar';

const App = () => {

  const [collapsed, setCollapsed] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");

  const handleSelectLabel = (key) => {
    const menuItem = menuData.find(item => item.key === key);
    if (menuItem) {
      setSelectedLabel(menuItem.label);
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Sidebar onSelectLabel={handleSelectLabel} />
        </Sider>

        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <HeaderCom state={collapsed} setState={setCollapsed} />
          </Header>

          <Breadcrumb style={{ margin: '24px 16px 0px' }}>
            <Breadcrumb.Item>{selectedLabel}</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: "280",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >

            <RoutersNav />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
export default App;