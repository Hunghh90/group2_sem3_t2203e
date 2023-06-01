
import {
  Layout,
  Menu,
  theme,
  Avatar
} from 'antd';
import { useState } from 'react';
import AvatarComponent from './component/Avatar.component'
import SearchComponent from './component/Search.component';
import UserNameComponent from './component/UserName.component';
import LoginButtonComponent from './component/LoginButton.component';
import ListFinanceIn from './pages/financeIn/FinanceIn.page';
import { NavLink, Route, Routes } from 'react-router-dom';
import MenuComponent from './component/Menu.component';
import CreateFinanceIn from './pages/financeIn/CreateFinanceIn.page';
const { Header, Content, Footer, Sider } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <AvatarComponent />
        <div>
          <UserNameComponent />
        </div>
        <MenuComponent />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            backgroundColor: "#F5FFFA",
            display: "block"
          }}
        >
          <div><NavLink to="/" style={{
            width: "30vw",
            color: "#BFEFFF",
            float: "left",
            textAlign: "center",
            fontSize: "50px",
            fontWeight: "500px",
            // marginLeft: "100px"
          }}>Group2 T2203E</NavLink></div>

          <LoginButtonComponent />
          <SearchComponent />
        </Header>
        <Content
          style={{
            margin: '16px 16px',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >


            <Routes>
              <Route path='/listfinancein' element={<ListFinanceIn />} />
              <Route path='/createfinancein' element={<CreateFinanceIn />} />
            </Routes>



          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;