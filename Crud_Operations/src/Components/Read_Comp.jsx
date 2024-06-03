import React, { useState, useEffect } from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Create_Component from './Create_Component';
import Update_Comp from './Update_Comp';
import { getUsers, deleteUser } from '../Services/api';

function Read_Comp() {
    const [userData, setUserData] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await getUsers();
            setUserData(response.data);
        } catch (error) {
            message.error('Failed to fetch items');
        }
    };

    const addData = (newData) => {
        setUserData((prevData) => [...prevData, newData]);
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setIsEditModalOpen(true);
    };

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            message.success('Item deleted successfully');
            setUserData((prevData) => prevData.filter(item => item.id !== id));
        } catch (error) {
            message.error('Failed to delete item');
        }
    };

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'body',
            key: 'body',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
              
                <>
                  console.log("data", record)
                    <EditOutlined onClick={() => handleEdit(record)} style={{ marginRight: 10 }} />
                    <Popconfirm
                        title="Are you sure you want to delete this item?"
                        onConfirm={() => handleDelete(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} />
                    </Popconfirm>
                </>
            ),
        },
    ];

    return (
        <>
            <Create_Component addData={addData} />
            <Table
                columns={columns}
                dataSource={userData}
                rowKey="id"
                size="middle"
                style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '10px', padding: '50px' }}
            />
            <Update_Comp
                isEditModalOpen={isEditModalOpen}
                setIsEditModalOpen={setIsEditModalOpen}
                user={editingUser}
                fetchItems={fetchItems}
            />
        </>
    );
}

export default Read_Comp;
