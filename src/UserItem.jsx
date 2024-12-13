import { Button, Card, CardActions, CardContent, Grid, Typography }
    from '@mui/material';
import React from 'react'

function UserItem({ user, onEdit, onDelete }) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card style={{ backgroundColor: 'lightgrey', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                <CardContent>
                    <Typography variant='h6' style={{ color: 'black' }}>
                       Name : {user.name}
                    </Typography>
                    <Typography color="textSecondary">Email : {user.email}
                    </Typography>
                </CardContent>
                <CardActions>
                   {/* Button for editing the user, calls onEdit with the user data */}
                    <Button size="small" variant="contained"
                        onClick={() => onEdit(user)} style={{color:"white", fontWeight:"bold"}}>
                       <i class="bi bi-pencil-square"></i>&nbsp; Edit
                    </Button>
                    {/* Button for deleting the user, calls onDelete with the user ID */}
                    {/* <Button size="small" color='secondary' variant="contained"
                        onClick={() => onDelete(user.id)} style={{color:"white", fontWeight:"bold"}}>
                       <i class="bi bi-trash-fill"></i>&nbsp; Delete
                    </Button> */}
                </CardActions>
            </Card>
        </Grid>
    )
}

export default UserItem