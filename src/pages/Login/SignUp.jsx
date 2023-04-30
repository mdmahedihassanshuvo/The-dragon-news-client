import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [accept, setAccept] = useState(false)
    const navigate = useNavigate()

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        createUser(email, password)
        .then((result) => {
            const createdUser = result.user;
            console.log(createdUser)
            form.reset();
            updateUserProfile(name, photo)
            navigate('/') 
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const handleCheckBox = event =>{
        setAccept(event.target.checked)
    }

    return (
        <Container className='w-25'>
            <h3>Please Sign Up</h3>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter photo url" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check onClick={handleCheckBox} type="checkbox" name='accept' label={<>Accept all <Link to='/terms'>Terms and Conditions</Link></>} />
                </Form.Group>
                <Button variant="primary" disabled={!accept} type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-secondary mt-2'>Already have an account please, <Link className='text-primary' to='/login'>Login</Link></p>
        </Container>
    );
};

export default SignUp;