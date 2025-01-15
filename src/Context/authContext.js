import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Create the context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState({});
    const navigate = useNavigate();


    const logout = async () => {
        try {
            await axios.post('http://localhost:8080/user/logout'); // Optional: Logout endpoint to clear session or server-side state
            setUser(null);
            setIsLogged(false);
            navigate('/login'); // Redirect after logout
        } catch (error) {
            console.error('Logout failed', error);
            setUser(null);
            setIsLogged(false);
            navigate('/login'); // Redirect after logout even on failure
        }
    };

    

    return (
        <AuthContext.Provider value={{ isLogged, user, setUser, setIsLogged, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
