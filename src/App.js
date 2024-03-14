import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Boarding from './components/Boarding';
import Managing from './components/Managing';
import Logout from './components/Logout'; // Import the Logout component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/boarding" element={<Boarding />} />
          <Route path="/managing" element={<Managing />} />
          <Route path="/logout" element={<Logout />} /> {/* Add the logout route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
