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
    getItem("Khoản Thu", 'sub1', <PieChartOutlined />, [
        getItem(<NavLink to="/list_income">Danh sách</NavLink>, "1"),
        getItem(<NavLink to="/create_income">Thêm mới</NavLink>, "2")
    ]),
    getItem('Khoản chi', 'sub2', <DesktopOutlined />, [
        getItem(<NavLink to="/list_expense">Danh sách</NavLink>, "3"),
        getItem(<NavLink to="/create_expense">Thêm mới</NavLink>, "4")
    ]),
    getItem('Nhân viên', 'sub3', <TeamOutlined />, [
        getItem(<NavLink to="/list_user">Danh sách</NavLink>, "5"),       
    ]),
    getItem("Lương", "sub4",<TeamOutlined />, [
        getItem(<NavLink to="/list_advance">Danh sách tạm ứng</NavLink>, "6"),
        getItem(<NavLink to="/create_advance">Tạm ứng lương</NavLink>, "7"),
        getItem(<NavLink to="/create_payroll">Tính lương nhân viên</NavLink>, "8")

    ])
];
const MenuComponent = () => {

    return (
        <>
            <Menu theme="dark" mode="inline" items={items} />
        </>
    );
};
export default MenuComponent;