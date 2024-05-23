
import React, { useState } from 'react';
import { Button } from 'antd';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';

function HeaderCom() {

    const [collapsed, setCollapsed] = useState(false);

    // const {
    //     token: { colorBgContainer, borderRadiusLG },
    // } = theme.useToken();

    return (
        <>

            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />


        </>
    )
}

export default HeaderCom