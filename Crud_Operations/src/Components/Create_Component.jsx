import React, { useState } from 'react';
import { Modal, Form, Input, Button, Space } from 'antd';
import { createUser } from '../Services/api';

function Create_Component({ addData }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const onFinishForm = async (values) => {
        try {
            const response = await createUser(values);
            console.log('Response:', response); // Log the response data
            addData(response); // Update parent component with the new data
            handleCancel();
        } catch (error) {
            console.error('Error:', error); // Log any errors that occur
        }
    };

    return (
        <>
            <Button
                type="primary"
                onClick={() => setIsModalOpen(true)}
                style={{ float: 'right', marginBottom: '20px' }}
            >
                Add Product+
            </Button>
            <Modal
                title="Add Product"
                open={isModalOpen}
                footer={null}
                onCancel={handleCancel}
            >
                <Form form={form} onFinish={onFinishForm} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[{ required: true, message: 'Title is required!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="body"
                        label="Description"
                        rules={[{ required: true, message: 'Description is required!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Space style={{ float: 'right' }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <Button htmlType="button" onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default Create_Component;
