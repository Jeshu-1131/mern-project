import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Signup.css";

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://mern-project-gpdk.onrender.com/api/auth/login', {
        username,
        password
      });
      setUsername(" ");
      setPassword(" ");
      console.log(response.data);
      navigate('/home');
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <form className='Rcontainer' onSubmit={handleSignIn}>
      <h2 className='Rheader'>Sign In</h2>
      <label className='Rlabel' htmlFor='username'>UserName:</label>
      <input className='Rinput' type="text" name='username' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label className='Rlabel' htmlFor='password'>Password:</label>
      <input  className='Rinput' type="password" name='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
     <div style={{display:'flex'}}>
     <button className='RRbutton'  type='submit'>Sign In</button>
     <div style={{display:"flex",marginLeft:'42%'}}>
     <div style={{marginTop:'4%',fontWeight:'bold'}}>For newusers:</div>
      <Link className='RRlink'   to='/register'>SignUp</Link>
     </div>
     </div>
      {error && <p className=''>{error}</p>}
    </form>
  );
};

export default SignInForm;