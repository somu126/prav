

import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './har.css';

const Har = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'https://suddep.onrender.com/login', {email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Success"){
                console.log("Login Success");
                alert('Login successful!')
                navigate('/home');
            }
            else{
                alert('Incorrect password! Please try again.');
            }
        })
        .catch(err => console.log(err));
    }


    return (
        <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
          <input 
            type="email" 
            placeholder="Enter Email"
            className="form-control" 
            id="exampleInputEmail1" 
            onChange={(event) => setEmail(event.target.value)}
            required
           /> 
          </div>
          <div className="input-box">
          <input 
            type="password" 
            placeholder="Enter Password"
            className="form-control" 
            id="exampleInputPassword1" 
            onChange={(event) => setPassword(event.target.value)}
            required
            />
           
          </div>
          <button type="submit" className="btn ">Login</button>
                    {/* TO add ' appostopee */}
                    <p className='register-link'>Don&apos;t have an account?</p>
                    <Link to='/register' className="register-link">Register</Link>
        </form>
      </div>
    )
}

export default Har;