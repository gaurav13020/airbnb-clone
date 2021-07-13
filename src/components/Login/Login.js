import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useAuth } from '../contexts/AuthContext'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Login() {

    const history = useHistory();

    const [contact, setContact] = useState({
        email: "",
        password: ""
      });
    
      function handleChange(event) {
        const { name, value } = event.target;
    
        setContact(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };
        });
      }

    

    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        

        try {
            setError('')
            setLoading(true)
            await login(contact.email, contact.password)
            history.push("/")
        } catch {
            setError('Failed to Log in')
        }
            setLoading(false)

    }

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Log In</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to Log In !</Typography>
                </Grid>
                {error && <h3>{error}</h3>}
                <form onSubmit={handleSubmit}>
                   
                    <TextField onChange={handleChange} name="email"value={contact.email} fullWidth label='Email'  placeholder="Enter your email" />
                    
                    <TextField onChange={handleChange} name="password" value={contact.password} fullWidth label='Password'  placeholder="Enter your password"/>

                    <Button className="button" disabled={loading} type='submit' variant='contained' color='primary'>Log In</Button>
                </form>
                <div><Link to="/forgot-password">Forgot Password?</Link></div>
                <div>Need an account? <Link to="/signup">Sign Up</Link></div>
            </Paper>
        </Grid>





























        
        // <div>
        //     <div>
        //         <Card.Body>
        //             <h2 className="text-center mb-4">Sign Up</h2>
        //             <Form>

        //                 <Form.Group id="email">
        //                     <Form.Label> Email </Form.Label>
        //                     <Form.Control type="email" ref={emailRef} required />
        //                 </Form.Group>

        //                 <Form.Group id="password">
        //                     <Form.Label> Password </Form.Label>
        //                     <Form.Control type="password" ref={passwordRef} required />
        //                 </Form.Group>

        //                 <Form.Group id="password-confirm">
        //                     <Form.Label> Password Confirmation </Form.Label>
        //                     <Form.Control type="password" ref={passwordConfirmRef} required />
        //                 </Form.Group>

        //                 <div>
        //                     <Button className="w-100 " type="submit">Sign Up</Button>
        //                 </div>
          

        //             </Form>
        //         </Card.Body>
        //     </div>


        //     <div className="w-100 text-center mt-2">
        //         Already have an account? Log In
        //     </div>
        // </div>
    )
}

export default Login
