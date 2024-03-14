import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Managing.css'; // Import CSS file for styling
import PaymentGraph from './PaymentGraph';

const Managing = () => {
    const [families, setFamilies] = useState([
        { id: 1, houseNumber: '1A', floor: 'Ground Floor', payments: [] },
        { id: 2, houseNumber: '2B', floor: 'First Floor', payments: [{ year: 2022, month: 1, paid: true }] },
        // Add more families as needed
    ]);

    const handlePayment = (id) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1; // Month is zero-based index
        const updatedFamilies = families.map(family => {
            if (family.id === id) {
                const existingPayment = family.payments.find(payment => payment.year === currentYear && payment.month === currentMonth);
                if (existingPayment) {
                    return { ...family, payments: [...family.payments] };
                }
                return { ...family, payments: [...family.payments, { year: currentYear, month: currentMonth, paid: true }] };
            }
            return family;
        });
        setFamilies(updatedFamilies);
    };

    const calculateFine = () => {
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        if (currentDay > 10) {
            return true; // Fine applies
        }
        return false; // No fine
    };

    return (
        <div className="managing-container">
            <h2>Managing Page</h2>
            <Link to="/Home" className="back-button">Back to Home</Link>
            <div>
                <h3>Monthly Maintenance Payment</h3>
                <ul className="maintenance-list">
                    {families.map(family => (
                        <li key={family.id} className="family-item">
                            <div>
                                <strong>House Number:</strong> {family.houseNumber}
                            </div>
                            <div>
                                <strong>Floor:</strong> {family.floor}
                            </div>
                            <div>
                                {family.payments.map(payment => (
                                    <div key={`${payment.year}-${payment.month}`}>
                                        <strong>Year:</strong> {payment.year}, <strong>Month:</strong> {payment.month}, <strong>Paid:</strong> {payment.paid ? 'Yes' : 'No'}
                                    </div>
                                ))}
                                {!family.payments.some(payment => payment.year === new Date().getFullYear() && payment.month === new Date().getMonth() + 1) && (
                                    <button onClick={() => handlePayment(family.id)}>Mark Paid</button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
                {calculateFine() && (
                    <p className="fine-message"><b>A fine of 100 Rs applies for late payment. </b></p>
                )}
                <PaymentGraph families={families} />
            </div>
        </div>
    );
};

export default Managing;
