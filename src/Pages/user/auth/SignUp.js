import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import { LOGIN } from '../../../config/constants/routePathConstant';

function SignUp() {
    const [signUp, setSignUp] = useState({
        name: '',
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUp((pre) => ({
            ...pre, [name]: value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/signin', {
            name: signUp.name,
            email: signUp.email,
            password: signUp.password,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="signup-page">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="text">Name:</label>
                    <input type="text" id="text" name='name' value={signUp.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name='email' value={signUp.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name='password' value={signUp.password} onChange={handleChange} />
                </div>
                <button type="submit">Login</button>
                <Link to={LOGIN}>
                    <div className='goTo-login'>
                        <a href="/">Go to login Page</a>
                    </div>
                </Link>
            </form>

        </div>
    );
}

export default SignUp;
