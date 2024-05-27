import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import Create_Component from './Create_Component';
import { Table } from 'antd';
import axios from 'axios';
import ProductsData from '../data.json';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Update_Comp from './Update_Comp';


function Read_Comp() {

    const [userData, setUserData] = useState([])

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEdit = (record) => {
        // setEditingRecord(record);
        // form.setFieldsValue(record); // Set form fields with the selected record
        setIsEditModalOpen(true);
    };

    const columns = [
        {
            title: 'Id',
            dataIndex: 'key',
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
                    <DeleteOutlined onClick={() => handleDelete(record.key)} style={{ color: 'red' }} />
                </>
            ),
        },
    ];


    useEffect(() => {
        const getUserList = async () => {
            try {
                // const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                // console.log(response);
                setUserData(ProductsData.products)
                // console.log(ProductsData);
            } catch (e) {
                console.log(e);
            }
        }
        getUserList();

    }, []);


    const data = userData.map((items, index) => ({
        key: index + 1,
        title: items.title,
        price: items.price,
        stock: items.stock,
    }))

    return (
        <>

            <Create_Component />

            <Table columns={columns} dataSource={data} size="middle" />

            <Update_Comp isEditModal={isEditModalOpen} setEditModal={setIsEditModalOpen} />

        </>


    )
}

export default Read_Comp