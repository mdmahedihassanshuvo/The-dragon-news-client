import React from 'react';
import { Link } from 'react-router-dom';

const Tarms = () => {
    return (
        <div>
            <h2>terms and condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid iste fuga possimus voluptatum. Quae, quisquam neque expedita non nam repellat dolor dolores quam dolorem maiores voluptatibus nisi asperiores rerum.</p>
            <p>Go back <Link className='text-primary' to='/register'>Register</Link></p>
        </div>
    );
};

export default Tarms;