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
            <ul className="navbar-menu">
                <Link to='/'><li className={menu === 'home'? 'active':''} onClick={() => { setMenu('home'); scrollToTop(); }}>Home</li></Link>
                <li className={menu === 'menu'?  'active':''} onClick={() => { setMenu('menu'); scrollToTop(); }}><a href='#explore-menu'>Menu</a></li>
                <li className={menu === 'mobile'? 'active':''} onClick={() => { setMenu('mobile'); scrollToTop(); }}><a href='#app-download'>Mobile App</a></li>
                <li className={menu === 'contact'? 'active':''} onClick={() => { setMenu('contact'); scrollToTop(); }}><a href='#footer'>Contact Us</a></li>
            </ul>
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
