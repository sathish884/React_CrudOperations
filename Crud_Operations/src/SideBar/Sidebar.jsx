import React from 'react';
import {
    // UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Menu, Breadcrumb } from 'antd';

import { Link, useNavigate } from 'react-router-dom';

export const menuData = [
    { key: '1', icon: UserOutlined, label: 'Dashboard', path: '/' },
    { key: '2', icon: VideoCameraOutlined, label: 'Read Component', path: '/read' }
];

function Sidebar({ onSelectLabel }) {

    const menuItems = menuData.map((item) => ({
        key: item.key,
        icon: React.createElement(item.icon),
        label: <Link to={item.path}>{item.label}</Link>,
    }));

    const handleMenuSelect = (label) => {
        onSelectLabel(label);
    };

    return (
        <>

            <div className="demo-logo-vertical" />

            <Menu theme="dark" mode="inline" onSelect={({ key }) => handleMenuSelect(key)}>
                {menuItems.map(item => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.path}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </>
    )
}

export default Sidebar