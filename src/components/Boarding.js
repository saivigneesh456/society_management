import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Boarding.css'; // Import CSS file for styling

const Boarding = () => {
    const [homes, setHomes] = useState([
        { id: 1, houseNumber: '1A', floor: 'Ground Floor', headOfFamily: 'John Doe', joining: '2022-01-01' },
        { id: 2, houseNumber: '2B', floor: 'First Floor', headOfFamily: 'Jane Smith', joining: '2022-02-15' },
        // Add more initial homes as needed
    ]);

    const [newHome, setNewHome] = useState({ houseNumber: '', floor: '', headOfFamily: '', joining: '' });
    const [editMode, setEditMode] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewHome({ ...newHome, [name]: value });
    };

    const addHome = () => {
        if (newHome.houseNumber && newHome.floor && newHome.headOfFamily && newHome.joining) {
            setHomes([...homes, { id: Date.now(), ...newHome }]);
            setNewHome({ houseNumber: '', floor: '', headOfFamily: '', joining: '' });
        }
    };

    const deleteHome = (id) => {
        setHomes(homes.filter(home => home.id !== id));
    };

    const editHome = (id) => {
        const homeToEdit = homes.find(home => home.id === id);
        setEditMode(true);
        setEditIndex(id);
        setNewHome({ ...homeToEdit });
    };

    const updateHome = () => {
        const updatedHomes = homes.map(home => {
            if (home.id === editIndex) {
                return { ...home, ...newHome };
            }
            return home;
        });
        setHomes(updatedHomes);
        setEditMode(false);
        setEditIndex(null);
        setNewHome({ houseNumber: '', floor: '', headOfFamily: '', joining: '' });
    };

    return (
        <div className="boarding-container">
            <h2>Boarding Page</h2>
            <Link to="/Home">Back to Home</Link> {/* Link to navigate back to the home page */}
            <div className="add-edit-form">
                <h3>{editMode ? 'Edit Home' : 'Add New Home'}</h3>
                <input type="text" name="houseNumber" placeholder="House Number" value={newHome.houseNumber} onChange={handleInputChange} />
                <input type="text" name="floor" placeholder="Floor" value={newHome.floor} onChange={handleInputChange} />
                <input type="text" name="headOfFamily" placeholder="Head of Family" value={newHome.headOfFamily} onChange={handleInputChange} />
                <input type="date" name="joining" placeholder="Joining Date" value={newHome.joining} onChange={handleInputChange} />
                {editMode ? <button onClick={updateHome}>Update Home</button> : <button onClick={addHome}>Add Home</button>}
            </div>
            <div>
                <h3>Homes List</h3>
                <ul className="homes-list">
                    {homes.map(home => (
                        <li key={home.id} className="home-item">
                            <div>
                                <strong>House Number:</strong> {home.houseNumber}
                            </div>
                            <div>
                                <strong>Floor:</strong> {home.floor}
                            </div>
                            <div>
                                <strong>Head of Family:</strong> {home.headOfFamily}
                            </div>
                            <div>
                                <strong>Joining Date:</strong> {home.joining}
                            </div>
                            <div className="home-buttons">
                                <button onClick={() => editHome(home.id)}>Edit</button>
                                <button onClick={() => deleteHome(home.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Boarding;
