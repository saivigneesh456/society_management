import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
    const handleLogout = () => {
        // Perform logout actions if any
        // For now, let's just redirect to the login page
        window.location.href = '/'; // Redirect to the login page
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
