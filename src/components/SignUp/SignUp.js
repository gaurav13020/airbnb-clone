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

function SignUp() {

    const history = useHistory();

    const [contact, setContact] = useState({
        email: "",
        password: "",
        passwordConfirm: ""
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

    const { signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (contact.password !== contact.passwordConfirm) {
            return setError('Password do not match')
        } 

        try {
            setError('')
            setLoading(true)
            await signup(contact.email, contact.password)
            history.push("/")
        } catch {
            setError('Failed to create an account')
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
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                {error && <h3>{error}</h3>}
                <form onSubmit={handleSubmit}>
                   
                    <TextField onChange={handleChange} name="email"value={contact.email} fullWidth label='Email'  placeholder="Enter your email" />
                    
                    <TextField onChange={handleChange} name="password" value={contact.password} fullWidth label='Password'  placeholder="Enter your password"/>

                    <TextField onChange={handleChange} name="passwordConfirm" value={contact.passwordConfirm} fullWidth label='Confirm Password'  placeholder="Confirm your password"/>

                    
                    <Button disabled={loading} type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
                <div>Already have an account? <Link to="/login">Log In</Link></div>
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

export default SignUp
