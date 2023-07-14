
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
import ListFinanceIn from './pages/financeIn/FinanceIn.page';
import CreateFinanceIn from './pages/financeIn/CreateFinanceIn.page';
import ListFinanceOut from './pages/financeout/FinanceOut.page';
import CreateFinanceOut from './pages/financeout/CreateFinanceOut.page';
import ProFile from './pages/user/ProFile.page';
import CreateAdvance from './pages/advance/CreateAdvance';
import CreatePayRoll from './pages/CreatePayRoll';
import { LoginOutlined } from '@ant-design/icons';
import LoginComponent from './component/Login.component';
import { ToastContainer } from 'react-toastify';
import './css/customcss.scss';
import 'react-toastify/dist/ReactToastify.css';
import ListAdvance from './pages/advance/ListAdvance';

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
        <div>
          <Modal className='modal'
            title="Thông tin cá nhân"
            open={isModalAvartar}
            onOk={() => setIsModalAvartar(false)}
            onCancel={() => setIsModalAvartar(false)}>
            <ProFile />
          </Modal>
        </div>
        <div>
          <UserNameComponent />
        </div>
        <MenuComponent />
      </Sider>
      <Layout className='layout-header'>
        <Header className='header'>
          <div className='logo'>
            <NavLink className="logo-nav-link" to="/">
              Accountant Pro
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
              <LoginComponent 
              setIsModalLogin={setIsModalLogin}
              />
            </Modal>
          </div>
          <SearchComponent />
        </Header>
        <Content className='content'>
          <div className='content-content'>
            <Routes>
              <Route path='/list_income' element={<ListFinanceIn />} />
              <Route path='/create_income' element={<CreateFinanceIn />} />
              <Route path='/list_expense' element={<ListFinanceOut />} />
              <Route path='/create_expense' element={<CreateFinanceOut />} />
              <Route path='/create_advance' element={<CreateAdvance />} />
              <Route path='/create_payroll' element={<CreatePayRoll />} />
              <Route path='/list_advance' element={<ListAdvance />} />
            </Routes>
          </div>


        </Content>
        <Footer className='footer'>
          Group 2 T2203E
        </Footer>
      </Layout>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </Layout>
  );
};
export default App;