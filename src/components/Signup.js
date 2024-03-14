import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; // Import CSS file for styling

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        // Implement signup functionality here
        console.log('Signing up with:', username, email, phoneNumber, password);
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button onClick={handleSignup}>Sign Up</button>
            <p>If you already have an account, <Link to="/">click here</Link> to log in.</p>
        </div>
    );
};

export default Signup;
