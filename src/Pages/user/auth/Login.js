import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { SIGN_UP } from '../../../config/constants/routePathConstant';
import './style.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: handle login submit
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">Login</button>
                <Link to={SIGN_UP}>
                    <div className='goTo-signIn'>
                        <a href="/">Go to Singn In Page</a>
                    </div>
                </Link>
            </form>
        </div>
    );
}

export default LoginPage;
