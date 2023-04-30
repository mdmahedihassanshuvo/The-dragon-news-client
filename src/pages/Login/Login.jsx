import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const {logInUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const from = location.state?.from?.pathname || '/'

    const handleLogIn = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
            navigate(from, {replace: true})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <Container className='w-25'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className="text-success">
                    
                </Form.Text>
                <Form.Text className="text-danger">
                    
                </Form.Text>
            </Form>
            <p className='text-secondary mt-2'>Don't have any account please, <Link className='text-primary' to='/register'>Sign Up</Link></p>
        </Container>
    );
};

export default Login;