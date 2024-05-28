import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import Create_Component from './Create_Component';
import { Table } from 'antd';
import axios from 'axios';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Update_Comp from './Update_Comp';
import { getUsers, deleteUser } from '../Services/api';


function Read_Comp() {

    const [userData, setUserData] = useState([])

    const [editingUser, setEditingUser] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        fetchItems();
    }, []);


    // Get user lists
    const fetchItems = async () => {
        try {
            //  const response = await getUsers();
            setUserData(response.data);
        } catch (error) {
            message.error('Failed to fetch items');
        }
    };

    // User edit
    const handleEdit = (user) => {
        setEditingUser(user);
        setIsModalVisible(true);
    };

    // Delete user list
    const handleDelete = async (key) => {
        try {
            //   await deleteUser(key);
            message.success('Item deleted successfully');
            fetchItems();
        } catch (error) {
            message.error('Failed to delete item');
        }
    };

    const columns = [
        {
            title: 'Id',
            dataIndex: 'key'
        },
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Price',
            dataIndex: 'price',

        },
        {
            title: 'Stock',
            dataIndex: 'stock',

        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <>
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

    const data = userData.map((items, index) => ({
        key: index + 1,
        title: items.title,
        price: items.price,
        stock: items.stock,
    }))

    return (
        <>
            <Create_Component />

            <Table columns={columns} dataSource={data} size="middle" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "10px" }} />

            <Update_Comp isEditModal={isEditModalOpen} setEditModal={setIsEditModalOpen} user={editingUser} />
        </>
    )
}

export default Read_Comp