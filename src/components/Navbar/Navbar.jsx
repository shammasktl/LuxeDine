import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assests/assets';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('home');

    const {getTotalCartAmount} = useContext(StoreContext)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Optional: smooth scrolling animation
        });
    };

    return (
        <div className="navbar" id='login'>
            <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" className='icon bg'/>
                <div className="navbar-cart-icon">
                    <Link to='/cart'><img src={assets.cart_icon} alt="" className='icon bg'/></Link>
                    <div className={getTotalCartAmount()===0?'':'dot'}></div>
                </div>
                <button onClick={() => { setShowLogin(true); scrollToTop(); }}>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
