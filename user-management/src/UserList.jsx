import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, Grid, Typography, Button, Paper, Snackbar, Alert } from '@mui/material'
import UserItem from './UserItem';
import UserForm from './UserForm';

function UserList() {

    // State to manage the list of users
    const [users, setUsers] = useState([]);
    // State to manage the currently editing user
    const [editingUser, setEditingUser] = useState(null);
    // State to manage the snackbar notifications
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    // useEffect to fetch users when the component mounts
    useEffect(() => {
        fetchUsers();
    }, [])

    // Function to fetch users from the API
    const fetchUsers = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
        } catch (error) {
            console.log('Error fetching users:', error);
            showSnackbar('Error fetching users', 'error');
        }
    }

    // Function to add a new user
    const addUser = async (user) => {
        try {
            console.log("Axios check", axios.post(`https://jsonplaceholder.typicode.com/users/`, user));
            const response = await axios.post(`https://jsonplaceholder.typicode.com/users/`, user);
            // Add the new user to the state
            setUsers([...users, response.data]);
            // Clear the editing user state
            setEditingUser(null);
            showSnackbar('User addes successfully', 'success');
        } catch (error) {
            console.log('Error adding users:', error);
            showSnackbar('Error adding users', 'error');
        }
    }

    // Function to update an existing user
    const updateUser = async (user) => {
        try {
            await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
            // Update the user in the state
            setUsers(users.map((u) => (u.id === user.id ? user : u)));
            // Clear the editing user state
            setEditingUser(null);
            showSnackbar('User updated successfully', 'success');
        } catch (error) {
            console.log('Error updating users:', error);
            showSnackbar('Error updating users', 'error');
        }
    }

    // Function to delete a user
    const deleteUser = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            // Remove the user from the state
            setUsers(users.filter((user) => user.id !== id));
            showSnackbar('User deleted Successfully', 'success');
        } catch (error) {
            console.log('Error deleting users:', error);
            showSnackbar('Error deleting users', 'error');
        }
    }

    // Function to show the snackbar notification
    const showSnackbar = (message, severity) => {
        setSnackbar({ open: true, message, severity });
    }

    // Function to handle snackbar close event
    const handleSnackbarClose = () => {
        setSnackbar({ ...snackbar, open: false })
    }
    return (
        <Container>
            {/* Paper component for styling and layout */}
            <Paper style={{
                padding: '20px 40px', margin: '30px 0px', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", backgroundColor: "#00DBDE",
                backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"

            }} >
                <Typography variant='h4' gutterBottom style={{ textAlign: "center", textDecoration: "underline", color: "white" }}>User Management</Typography>

                {/* Button to add a new user */}
                <Button variant="contained" style={{ margin: '20px', float: "right", backgroundColor: "white", color: "black", fontWeight: "bold" }}
                    onClick={() => setEditingUser({})}>Add user</Button>
                {editingUser && (
                    <UserForm
                        user={editingUser}
                        onSave={editingUser.id ? updateUser : addUser}
                        onCancel={() => setEditingUser(null)}
                    />
                )}

                {/* Grid to display the list of users */}
                <Grid container spacing={3}>
                    {users.map((user) => (
                        <UserItem
                            key={user.id}
                            user={user}
                            onEdit={setEditingUser}
                            onDelete={deleteUser}>

                        </UserItem>
                    ))}
                </Grid>
            </Paper>

            {/* Snackbar for displaying notifications */}
            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbar.severity}
                    sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Container>
    )
}

export default UserList