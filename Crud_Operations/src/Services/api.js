import axios from 'axios';

export const getUsers = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/posts');
};

export const createUser = async (userData) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', userData);
    return response.data;
};

export const deleteUser = async (id) => {
    return await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export const updateUser = async (id, userData) => {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, userData);
    return response.data;
};