import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file for styling

const Home = () => {
    return (
        <div id = "back">
            <h2>Home Page</h2>
            <marquee>Wel Come to Aparments Society</marquee>
            <nav id = "back">
                <ul>
                    <li><Link to="/boarding">Boarding</Link></li>
                    <li><Link to="/managing">Managing</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
            <h2>Home Page</h2>
            {/* Add additional content here */}
        </div>
    );
};

export default Home;
