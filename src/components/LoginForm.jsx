// frontend/src/components/LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

// --- Validation Helpers ---
const isValidEmail = (email) => {
    // Basic email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email);
};

const isValidPassword = (password) => {
    // Password should be at least 6 characters long
    return password.length >= 6; 
};
// --------------------------

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [apiError, setApiError] = useState('');
    const [loading, setLoading] = useState(false);

    // CRITICAL: USE YOUR LIVE RENDER URL HERE (Example below)
    // Replace 'YOUR-RENDER-URL' with the actual live URL you got from Render!
    const backendUrl = 'https://netflix-login-clone-83q9.onrender.com/api/login'; 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear error as user types
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;
        const { email, password } = formData;

        if (!email) {
            errors.email = 'Email is required.';
            isValid = false;
        } else if (!isValidEmail(email)) {
            errors.email = 'Please enter a valid email address.';
            isValid = false;
        }

        if (!password) {
            errors.password = 'Password is required.';
            isValid = false;
        } else if (!isValidPassword(password)) {
            errors.password = 'Password must be at least 6 characters.';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setApiError(''); // Clear previous API errors

        if (!validateForm()) {
            return; 
        }

        setLoading(true);

        try {
            // Post login data to the live backend API
            const response = await axios.post(backendUrl, formData);
            
            if (response.status === 200) {
                // Success: Redirect to the dummy dashboard page
                window.location.href = '/dashboard-dummy'; 
            }
        } catch (err) {
            // Failure: Display error message from backend (e.g., Invalid email or password.)
            const message = err.response?.data?.message || 'Login failed. Please try again.';
            setApiError(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-black md:bg-opacity-75 w-full px-4 py-8 md:p-12 md:sm:p-16 rounded md:max-w-sm md:mx-auto mb-20">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">Sign In</h1>
            <form onSubmit={handleSubmit}>
                
                {/* Email Input */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email or phone number"
                    className={`w-full p-4 mb-2 text-base bg-[#333] text-white rounded focus:outline-none ${formErrors.email ? 'border-b-2 border-red-500' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                />
                {formErrors.email && (
                    <p className="text-red-500 text-sm mb-4">{formErrors.email}</p>
                )}
                
                {/* Password Input */}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`w-full p-4 mb-2 text-base bg-[#333] text-white rounded focus:outline-none ${formErrors.password ? 'border-b-2 border-red-500' : ''}`}
                    value={formData.password}
                    onChange={handleChange}
                />
                {formErrors.password && (
                    <p className="text-red-500 text-sm mb-4">{formErrors.password}</p>
                )}
                
                {/* API Error Message */}
                {apiError && (
                    <div className="text-sm text-red-500 mb-4 font-semibold p-3 bg-red-900 bg-opacity-30 rounded">
                        {apiError}
                    </div>
                )}
                
                {/* Submit Button */}
                <button
                    type="submit"
                    className={`w-full p-3 sm:p-4 text-lg font-bold rounded ${
                        loading ? 'bg-red-700' : 'bg-[#e50914] hover:bg-red-700'
                    } transition-colors mt-6`}
                    disabled={loading}
                >
                    {loading ? 'Logging In...' : 'Sign In'}
                </button>
                
                {/* Remember Me / Help Link */}
                <div className="flex justify-between items-center mt-3 text-sm">
                    <div className="flex items-center">
                        <input type="checkbox" id="remember" className="mr-2 h-4 w-4 bg-[#333] border-none"/>
                        <label htmlFor="remember" className="text-gray-400">Remember me</label>
                    </div>
                    <a href="#" className="text-gray-400 hover:underline">Need help?</a>
                </div>
            </form>

            {/* Sign Up Link */}
            <div className="mt-12 text-gray-500">
                <span className="text-base">New to Netflix? </span>
                <a href="#" className="text-white hover:underline font-semibold text-base">Sign up now.</a>
            </div>
        </div>
    );
};

export default LoginForm;