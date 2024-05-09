import React, { useState } from 'react';
import axios from 'axios';
import { validateSignupForm } from './validation';  
import './signup.css';

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: ''
    });
    const [errors, setErrors] = useState({}); // State to hold validation errors

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validate the field dynamically as the user types
        const validationErrors = validateSignupForm({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: validationErrors[name] || '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateSignupForm(formData); // Validate form data
        if (Object.keys(validationErrors).length === 0) {
            // If no validation errors, submit the form
            try {
                const response = await axios.post('http://localhost:5000/signup', formData);
                console.log(response.data);
                // Optionally, handle successful form submission
            } catch (error) {
                console.error('Error signing up:', error);
                // Optionally, handle error response from backend
            }
        } else {
            // If there are validation errors, set the errors state
            setErrors(validationErrors);
        }
    };

    return (
        <div className='body'>
        <div className="signup-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className="error">{errors.username}</p>} {/* Display username error */}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>} {/* Display email error */}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <p className="error">{errors.phone}</p>} {/* Display phone error */}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>} {/* Display password error */}
                </div>
                <button type="submit" className="btn">Signup</button>
            </form>
        </div>

        </div>
    );
}

export default Signup;
