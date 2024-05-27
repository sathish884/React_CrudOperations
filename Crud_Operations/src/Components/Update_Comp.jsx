import React from 'react';
import { Modal, Form, Input, Button, Space } from 'antd';

function Update_Comp({ isEditModal, setEditModal }) {

    const [form] = Form.useForm(); // Creating a form instance

    const handleCancel = () => {
        setEditModal(false)
        //  onReset()
    }

    const onFinish = async (values) => {
        try {
            // console.log('Received values:', values);
            // const response = await axios.post("https://jsonplaceholder.typicode.com/posts", values, {
            //     headers: {
            //         'Content-Type': 'application/json; charset=UTF-8',
            //     },
            // });
            console.log('Response:', values); // Log the response data
            handleCancel()
        } catch (error) {
            console.error('Error:', error); // Log any errors that occur
        }
    };



    return (
        <>
            <Modal title="Edit Products"
                open={isEditModal} // Use 'visible' if you are using an older version of Ant Design
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
                                Submit
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