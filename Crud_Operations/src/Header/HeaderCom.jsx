
import React, { useState } from 'react';
import { Button } from 'antd';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';

function HeaderCom({ state, setState }) {


    return (
        <>

            <Button
                type="text"
                icon={state ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setState(!state)}
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