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
    getItem('Option 2', '3', <DesktopOutlined />),
    getItem('User', 'sub2', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];
const MenuComponent = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Menu theme="dark" mode="inline" items={items} />
        </>
    );
};
export default MenuComponent;