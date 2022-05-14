import React from 'react';
import './index.css';
import Logo from '../Logo';
import Search from '../Search';



const Header = () => {
    return(
        <header>
            <Logo />
            
            <div className='rrr'>   
            <Search/>          
            <button class="button-1">Личный кабинет</button>
            </div>
        </header>
    )
}

export default Header;