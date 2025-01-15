import React, { useEffect, useState } from 'react';
import './LoginForm.css';
import axios from 'axios';

const LoginForm = () => {
    const [formType, setFormType] = useState('login'); 

    const handleFormChange = (type) => {
        setFormType(type);
    };

    const [user,setUser] = useState([]);
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');

    useEffect(() => {
        fetchUsers();
    },[]);

    const fetchUsers = () => {
        axios.get('http:localhost:8080/user/read')
        .then(response => {
            setUser(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching the Users!!!", error);
        });
    };

    const handleAddUser = () => {
        const newUser = {userName,password};

        axios.post('http:localhost:8080/user/add',newUser)
        .then(response => {
            fetchUsers();
            setUserName('');
            setPassword('');
        })
        .catch(error => {
            console.error('Error adding Userssss', error);
        });      
    };

    return (
        <div className="signInContainer">
            <div className="formSwitcher">
                <button 
                    className={`formButton ${formType === 'login' ? 'active' : ''}`}
                    onClick={() => handleFormChange('login')}
                >
                    Log In
                </button>
                <button 
                    className={`formButton ${formType === 'signup' ? 'active' : ''}`}
                    onClick={() => handleFormChange('signup')}
                >
                    Sign Up
                </button>
            </div>
            <form onSubmit={handleAddUser}>
                <label>User Name</label><br />
                <input type='text' value={userName} placeholder='Enter user name'  onChange={(e) => setUserName(e.target.value)} required  /><br />
                <label>Password</label><br />
                <input type='text' value={password} placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} required /><br />
                {formType === 'signup' && (
                    <>
                        <label>Confirm Password</label><br />
                        <input placeholder='Confirm password' /><br />
                    </>
                )}
                <button type="submit">{formType === 'signup' ? 'Sign Up Now' : 'Log In Now'}</button>
           
          
            <div className="tnc">
                <p>By clicking on "{formType === 'signup' ? 'Sign Up' : 'Log In'}" you agree to <br /> <span>Terms of Service</span> | <span>Privacy Policy</span></p>
            </div>
            </form>
        </div>
    );
};

export default LoginForm;
