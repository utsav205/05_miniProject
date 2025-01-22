import React, { useState, useEffect } from 'react';
import './SignUpForm.css'

const SignUpForm = () => {
  // State for form fields
        const [name, setName] = useState('');
        const [mobile, setMobile] = useState('');
        const [email, setEmail] = useState('');
        const [address, setAddress] = useState('');
        const [dob, setDob] = useState('');
        const [gender, setGender] = useState('');
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');

        // State for form validation
        const [isFormValid, setIsFormValid] = useState(false);

        // Basic validation checks
        useEffect(() => {
                const isValid =
                name &&
                mobile.match(/^\d{10}$/) && // Mobile should be 10 digits
                email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) && // Valid email format
                address &&
                dob &&
                gender &&
                username &&
                password.length >= 6 && // Password should be at least 6 characters
                password === confirmPassword; // Password and Confirm Password match

                setIsFormValid(isValid);
        }, [name, mobile, email, address, dob, gender, username, password, confirmPassword]);

        // Handle form submission
        const handleSubmit = (e) => {
                e.preventDefault();
                if (isFormValid) {
                alert('Form submitted successfully');
                 // Submit logic goes here, like sending data to the server
                } else {
                alert('Please fill in all fields correctly');
                }
        };

        // Handle form reset
        const handleReset = () => {
                setName('');
                setMobile('');
                setEmail('');
                setAddress('');
                setDob('');
                setGender('');
                setUsername('');
                setPassword('');
                setConfirmPassword('');
        };

        return (
                <div className='main'>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div>
                <label>Mobile:</label>
                <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                maxLength={10}
                required
                />
                </div>

                <div>
                <label>Email:</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                </div>

                <div>
                <label>Address:</label>
                <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                />
                </div>

                <div>
                <label>Date of Birth:</label>
                <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
                />
                </div>

                <div>
                <label>Gender:</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                </select>
                </div>

                <div>
                <label>Username:</label>
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
                </div>

                <div>
                <label>Password:</label>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                </div>

                <div>
                <label>Confirm Password:</label>
                <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
                </div>

                <div>
                <button type="reset" onClick={handleReset}>Reset</button>
                <button type="submit" disabled={!isFormValid}>Submit</button>
                </div>
                </form>
                </div>
        );
};

export default SignUpForm;
