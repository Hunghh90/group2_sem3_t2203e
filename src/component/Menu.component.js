import {
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    PieChartOutlined,
    DesktopOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem("Doanh Thu", 'sub1', <PieChartOutlined />, [
        getItem(<NavLink to="/listfinancein">Danh sách</NavLink>, "1"),
        getItem(<NavLink to="/createfinancein">Thêm mới</NavLink>, "2")
    ]),
<<<<<<< HEAD
    getItem('Option 2', '3', <DesktopOutlined />),
    getItem('User', 'sub2', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
=======
    getItem('Khoản chi', 'sub2', <DesktopOutlined />, [
        getItem(<NavLink to="/listfinanceout">Danh sách</NavLink>, "3"),
        getItem(<NavLink to="/createfinanceout">Thêm mới</NavLink>, "4")
>>>>>>> c33d43ada47d779cb19a3922f654ca3cc0cfd598
    ]),
];
const MenuComponent = () => {

    return (
        <>
            <Menu theme="dark" mode="inline" items={items} />
        </>
    );
};
export default MenuComponent;