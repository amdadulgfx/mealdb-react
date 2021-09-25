import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <li><a href="/home">Home</a></li>
                <li><a href="/food">Order Food</a></li>
                <li><a href="/about">About Us</a></li>
            </nav>
        </div>
    );
};

export default Header;