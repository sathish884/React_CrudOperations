import React from 'react'
import { Modal } from 'antd';

function Create_Component({ isModalOpen, handleOk, handleCancel }) {
    return (
        <>
            <Modal
                title="Basic Modal"
                open={isModalOpen} // Use 'visible' if you are using an older version of Ant Design
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}

export default Create_Component