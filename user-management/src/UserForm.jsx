import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'


function UserForm({ user, onSave, onCancel }) {
    // State to manage form data with default values for name and email
    const [formData, setFormData] = useState({ name: '', email: '' });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
    
        if (!formData.name || formData.name.trim() === '') {
            newErrors.name = 'Name is required';
        }
    
        if (!formData.email || formData.email.trim() === '') {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
    
        setErrors(newErrors);
    
        // Return true if there are no errors, false otherwise
        return Object.keys(newErrors).length === 0;
    };

    // useEffect to set form data if user prop is passed
    useEffect(() => {
        if (user) {
            // Set form data with user details if user exists
            setFormData(user);
        }
    }, [user]); // Dependency array to run effect when user prop changes

    // Function to handle input change events
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Update form data state with new input value
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        // Prevent default form submission behavior
        e.preventDefault();
        // Call onSave prop function with form data
        if(validateForm()){
            onSave(formData)
        }

    }

    return (
        <Dialog open onClose={onCancel}>
            <DialogTitle>{user.id ? 'Edit User' : 'Add User'}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin='dense'
                    name='name'
                    label='Name'
                    type='text'
                    fullWidth
                    value={formData.name}
                    onChange={handleChange} error={!!errors.name} helperText={errors.name}></TextField>

                <TextField
                    autoFocus
                    margin='dense'
                    name='email'
                    label='Email'
                    type='email'
                    fullWidth
                    value={formData.email}
                    onChange={handleChange} error={!!errors.email} helperText={errors.email}></TextField>
            </DialogContent>
            <DialogActions>
                {/* Cancel button to close the dialog */}
                <Button variant="contained" onClick={onCancel} color='secondary' style={{ color: "white" }}>Cancel</Button>
                {/* Save button to submit the form */}
                <Button variant="contained" onClick={handleSubmit} style={{ backgroundColor: "blue", color: "white" }}>Save</Button>
            </DialogActions>
        </Dialog>
    )
}

export default UserForm