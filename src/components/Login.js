import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Import CSS file for styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

    const handleLogin = () => {
        // Check if the entered credentials match the predefined ones
        if (email === 'admin@gmail.com' && password === 'admin') {
            // Set isLoggedIn to true if the credentials are correct
            setIsLoggedIn(true);
        } else {
            // Handle incorrect credentials here (e.g., show error message)
            console.log('Incorrect email or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}> <Link to="/home">Login</Link></button>
            <p>If you don't have an account, <Link to="/signup">click here</Link> to sign up.</p>
            {isLoggedIn && <p>You are logged in! Redirecting to home page...</p>}
        </div>
    );
};

export default Login;
