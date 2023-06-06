
import {
  Layout,
  theme,
  Modal,
  Button
} from 'antd';
import { useState } from 'react';
import AvatarComponent from './component/Avatar.component'
import SearchComponent from './component/Search.component';
import UserNameComponent from './component/UserName.component';
import { NavLink, Route, Routes } from 'react-router-dom';
import MenuComponent from './component/Menu.component';
<<<<<<< HEAD
import CreateFinanceIn from './pages/financeIn/CreateFinanceIn.page';
import DashboardComponent from './component/Dashboard.component';

=======
import ListFinanceIn from './pages/financein/FinanceIn.page';
import CreateFinanceIn from './pages/financein/CreateFinanceIn.page';
import ListFinanceOut from './pages/financeout/FinanceOut.page';
import CreateFinanceOut from './pages/financeout/CreateFinanceOut.page';
import ProFile from './pages/user/ProFile.page';
import { LoginOutlined } from '@ant-design/icons';
import LoginComponent from './component/Login.component';
import './css/customcss.scss'
>>>>>>> c33d43ada47d779cb19a3922f654ca3cc0cfd598
const { Header, Content, Footer, Sider } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [isModalAvartar, setIsModalAvartar] = useState(false);
  return (
    <Layout className='layout'>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />

        <div onClick={() => setIsModalAvartar(true)}>


          <AvatarComponent />
        </div>
        <div><Modal className='modal'
          title="Thông tin cá nhân"
          open={isModalAvartar}
          onOk={() => setIsModalAvartar(false)}
          onCancel={() => setIsModalAvartar(false)}>
          <ProFile />
        </Modal></div>
        <div>
          <UserNameComponent />
        </div>
        <MenuComponent />
      </Sider>
      <Layout className='layout-header'>
        <Header className='header'>
          <div className='logo'>
            <NavLink className="logo-nav-link" to="/">
              Group2 T2203E
            </NavLink>
          </div>
          <div className='login'>
            <Button className='login-button'
              type="primary"
              shape="round"
              size='large'
              onClick={() => setIsModalLogin(true)}
            >
              <LoginOutlined /> Login
            </Button>
            <Modal className='login-modal'
              title="Login"
              open={isModalLogin}
              onCancel={() => setIsModalLogin(false)}
              footer={null}
            >
              <LoginComponent />
            </Modal>
          </div>
          <SearchComponent />
        </Header>
<<<<<<< HEAD
        <Content
          style={{
            margin: '16px 16px',
          }}
        >
      
            <DashboardComponent/>
    
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
=======
        <Content className='content'>
          <div className='content-content'>
>>>>>>> c33d43ada47d779cb19a3922f654ca3cc0cfd598
            <Routes>
              <Route path='/listfinancein' element={<ListFinanceIn />} />
              <Route path='/createfinancein' element={<CreateFinanceIn />} />
              <Route path='/listfinanceout' element={<ListFinanceOut />} />
              <Route path='/createfinanceout' element={<CreateFinanceOut />} />
            </Routes>
          </div>
         

        </Content>
        <Footer className='footer'>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;