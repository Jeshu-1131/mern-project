import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Signup.css';

const RegisterForm = () => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        fullname,
        username,
        password
      });
      setFullname(" ");
      setPassword(" ");
      setUsername(" ");
      console.log(response.data);
      navigate('/signin');
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <form className='Rcontainer' onSubmit={handleRegister}>
      <h2 className='Rheader'>Register</h2>
      <label className='Rlabel' htmlFor='fullname'>FullName:</label>
      <input className='Rinput' name="fullname" type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
      <label className='Rlabel' htmlFor='username'>UserName:</label>
      <input  className='Rinput' name='username' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label className='Rlabel' htmlFor='password'>Password:</label>
      <input  className='Rinput' type="password" name='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div style={{display:'flex'}}>
      <button className='Rbutton' type='submit'>Register</button>
    <div  style={{display:'flex',marginLeft:'43%'}}>
      <div className='Rtext'>If already User:</div>
    <Link className='Rlink' to="*">Signin</Link>
    </div>
      </div>
      {error && <p className='Rpara'>{error}</p>}
    </form>
  );
};

export default RegisterForm;