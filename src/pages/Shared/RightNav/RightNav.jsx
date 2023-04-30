import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle, FaGithub } from 'react-icons/fa';
import { Button, ListGroup } from 'react-bootstrap';
import Qzone from './Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h5 className='mb-3'>Login With</h5>
            <Button className='mb-2' style={{width: "200px"}} variant="outline-primary"><FaGoogle/> Login with Google</Button>
            <Button style={{width: "200px"}} variant="outline-secondary"><FaGithub/> Login with Github</Button>
            <div className='mt-5 mb-3 text-primary'>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;