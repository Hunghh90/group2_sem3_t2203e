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
    getItem(<NavLink to="/listfinancein">Doanh Thu</NavLink>, '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
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
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </>
    );
};
export default MenuComponent;