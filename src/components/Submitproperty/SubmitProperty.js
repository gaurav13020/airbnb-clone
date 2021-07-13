import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useState } from 'react';
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom';

function SubmitProperty() {
    const history = useHistory();
    const avatarStyle = { backgroundColor: '#1bbd7e' }

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to Log Out")
        }
    }

    
    

    return (
        <div>
        <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2>Profile</h2>
                    {error && <h3>{error}</h3>}
                    <strong>Email: </strong>{currentUser ? currentUser.email : history.push('/login')}
                    <Link to="/update-profile"></Link>
                    <Button onClick={() => history.push('/update-profile')} variant='contained' color='primary'>Update Profile</Button>
            <Button onClick={handleLogout} variant='contained' color='primary'>Log Out</Button>
        </div>
    )
}

export default SubmitProperty
