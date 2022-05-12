import React from 'react';
import logo from './img/logo.svg';

const Logo = () => {
    return (
        <a href='/' className='logo'>
            <img alt='posts' src={logo} className = 'logo_picture'/>
        </a>
    )
}

export default Logo;