import React, { useState, useEffect } from 'react';
import './LoginPopup.css';
import { assets } from '../../assests/assets'; // Adjust the path based on your project structure

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState('Login');

    useEffect(() => {
        document.body.classList.add('no-scroll');
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img src={assets.cancel_icon} onClick={() => setShowLogin(false)} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === 'Login' ? <></> : <input type="text" placeholder='Enter Your Name' required />}
                    <input type="email" placeholder='Enter Your Email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currState === 'Sign Up' ? 'Create an Account' : 'Login'}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" name="" id="" required/>
                    <p id='agree'>By agreeing, I accept the Terms of Use and Privacy Policy.</p>
                </div>
                {currState === 'Login'
                    ? <p>Create a new Account? <span onClick={() => setCurrState('Sign Up')}>Sign Up</span></p>
                    : <p>Already have an Account? <span onClick={() => setCurrState('Login')}>Login</span></p>}
            </form>
        </div>
    );
};

export default LoginPopup;
