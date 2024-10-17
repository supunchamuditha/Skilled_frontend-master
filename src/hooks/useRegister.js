import { useState } from 'react';

const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const register = async (formData) => {
        setLoading(true);
        setError('');
        setMessage('');

        try {
            // Use fetch to send JSON data
            const res = await fetch("/api/auth/registerUser", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),  // Send the form data as JSON
            });

            const result = await res.json();

            if (res.ok) {
                setMessage(result.message || 'Registration successful!');
            } else {
                setError(result.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return { register, loading, message, error };
};

export default useRegister;
