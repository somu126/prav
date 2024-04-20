

import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { faWeightScale } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
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
        <div>
            <div className='wrapper'>
                <div className="bg">
                    <h1 className='mb1'>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="inputbox">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <br>
                        </br>
                        <button type="submit" className="btn ">Login</button>
                    </form>
                    <br>
                    </br>
                    {/* TO add ' appostopee */}
                    <p className='remember-forgot'>Don&apos;t have an account?</p>
                     <Link to='/register' className='.register-link' >Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Login