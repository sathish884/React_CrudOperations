import React, { useEffect } from 'react';
import { Modal, Form, Input, Button, Space } from 'antd';
import { updateUser } from '../Services/api';

function Update_Comp({ user, isEditModal, setEditModal }) {

    const [form] = Form.useForm(); // Creating a form instance

    const handleCancel = () => {
        setEditModal(false)
        //  onReset()
    }

    useEffect(() => {
        if (user) {
            form.setFieldsValue(user);
        }
    }, [user, form]);


    const onFinish = async (values) => {
        try {
            const response = await updateUser(user.id, values);
            console.log('Response:', values); // Log the response data
            // Show a success message
            message.success('User updated successfully');
            handleCancel()
        } catch (error) {
            // Show an error message
            message.error('Failed to update user');
        }
    };

    return (
        <>
            <Modal title="Edit Products"
                open={isEditModal} // Use to 'visible' the modal
                footer={null} // Custom footer to remove default OK and Cancel buttons
                onCancel={handleCancel}>

                <Form form={form} onFinish={onFinish} labelCol={{
                    span: 24,
                }}
                    wrapperCol={{
                        span: 24,
                    }}
                >
                    <Form.Item
                        name="product name"
                        label="Product Name"
                        rules={[
                            {
                                required: true,
                                message: 'Product name is required!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="quantity"
                        label="Quantity"
                        rules={[
                            {
                                required: true,
                                message: 'Quantity is required!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="price"
                        label="Price"
                        rules={[
                            {
                                required: true,
                                message: 'Price is required!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Space style={{ float: "right" }}>
                            <Button type="primary" htmlType="submit">
                                Update
                            </Button>
                            <Button type="primary" htmlType="button" onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal >
        </>
    )
}

export default Update_Comp