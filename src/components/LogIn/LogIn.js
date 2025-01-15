import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./LogIn.css"
import { AuthContext } from '../../Context/authContext';

const LogIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const {isLogged,user,setUser,setIsLogged}=useContext(AuthContext);
  
  const navigate = useNavigate('')

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // console.log("usernamenmnmwneem"+user[0].userName)

    try {
      axios.post('http://localhost:8080/user/login', {
        userName,
        password
      }).then((res) => {
        console.log(res.data)
        setUser(res.data)
        
        if(res.data.length !== 0){
          setIsLogged(true)
        navigate("/");
        
      }


        else{
          window.alert("unsuccesful")
        }
      })


    } catch (err) {
      setError('An error occurred: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signInContainer">
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <label>User Name</label><br />
        <input
          type="text"
          placeholder='Enter user name'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        /><br />
        <label>Password</label><br />
        <input
          type="password"
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button
          type='submit'
          disabled={loading}
        >
          {loading ? 'Logging In...' : 'Login Now'}
        </button>
        {error && <p className="error">{error}</p>}
        <div className="createAccount">
          <Link to={'/signin'}><p>Don't have an account? Sign up here</p></Link>
        </div>
        <div className="tnc">
          <p>By clicking on "Login Now" you agree to <br />
            <span>Terms of Service</span> | <span>Privacy Policy</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
