import React, { useState, useEffect } from 'react';
import './SignIn.css';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';


const SignupForm = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneno,setPhoneNo] = useState('');
    const [email,setEmail] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('http://localhost:8080/user/read')
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching the users!", error);
        });
    };

    const handleAddUser = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const newUser = { userName, password ,phoneno , email };

        axios.post('http://localhost:8080/user/add', newUser)
        .then(response => {
            fetchUsers();
            setUserName('');
            setPassword('');
            setConfirmPassword('');
            setPhoneNo('');
            setEmail('');
            setTimeout((navigate('/login')),2000);
        })
        .catch(error => {
            console.error('Error adding user', error);
        });
    };

    return (
        <div className="signInContainer" >
            <h2>Sign in</h2>
            <form >
            <label>User Name</label><br />
                <input
                    type='text'
                    value={userName}
                    placeholder='Enter user name'
                    onChange={(e) => setUserName(e.target.value)}
                    required
                /><br />
                <label>Phone Number</label><br />
                <input
                    type='tel'
                    value={phoneno}
                    placeholder='Enter Phone Number'
                    onChange={(e) => setPhoneNo(e.target.value)}
                    required
                /><br />
                <label>Email Id</label><br />
                <input
                    type='email'
                    value={email}
                    placeholder='Enter email '
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /><br />
                <label>Password</label><br />
                <input
                    type='password'
                    value={password}
                    placeholder='Enter password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br />
                <label>Confirm Password</label><br />
                <input
                    type='password'
                    value={confirmPassword}
                    placeholder='Confirm password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                /><br />
               
               <button  onClick={handleAddUser}>Sign Up Now</button>

                <div className="createAccount">
                    <Link to={'/login'}><p>Already have an account? Log in here.</p></Link>
                </div>
                

                <div className="tnc">
                    <p>By clicking on "Sign Up Now" you agree to <br />
                    <span>Terms of Service</span> | <span>Privacy Policy</span></p>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;


