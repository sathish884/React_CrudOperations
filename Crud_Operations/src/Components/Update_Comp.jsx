import React, { useEffect } from 'react';
import { Modal, Form, Input, Button, Space } from 'antd';
import { updateUser } from '../Services/api';

function Update_Comp({ isEditModalOpen, setIsEditModalOpen, user, fetchItems }) {
    const [form] = Form.useForm();

    useEffect(() => {
        if (user) {
            form.setFieldsValue({
                title: user.title,
                body: user.body,
            });
        }
    }, [user, form]);

    const handleCancel = () => {
        setIsEditModalOpen(false);
        form.resetFields();
    };

    const onFinishForm = async (values) => {
        try {
            const response = await updateUser(user.id, values);
            console.log('Updated:', response);
            fetchItems(); // Fetch items to reflect the updated data
            handleCancel();
        } catch (error) {
            console.error('Error:', error); // Log any errors that occur
        }
    };

    return (
        <Modal
            title="Edit Product"
            open={isEditModalOpen}
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
    );
}

export default Update_Comp;
