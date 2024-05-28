import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/'; // Replace with your API endpoint

const headerCon = {
    'Content-Type': 'application/json; charset=UTF-8',
}

export const getUsers = () => axios.get(API_URL, { headers: headerCon });
export const createUser = (body) => axios.post(API_URL + "posts", body, { headers: headerCon });
export const updateUser = (id, body) => axios.put(`${API_URL}/${id}`, body, { headers: headerCon });
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`, { headers: headerCon });